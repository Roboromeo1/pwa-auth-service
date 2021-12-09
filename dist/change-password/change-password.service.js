"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const mailer_1 = require("@nestjs-modules/mailer");
let ChangePasswordService = class ChangePasswordService {
    constructor(usersService, mailerService) {
        this.usersService = usersService;
        this.mailerService = mailerService;
    }
    async changePassword(changePasswordDto) {
        this.sendMailChangePassword(changePasswordDto);
        return await this.usersService.updateByPassword(changePasswordDto.email, changePasswordDto.password);
    }
    sendMailChangePassword(user) {
        this.mailerService
            .sendMail({
            to: user.email,
            from: 'help@omindconsulting.com',
            subject: 'Change Password successful ✔',
            text: 'Change Password successful!',
            template: 'index',
            context: {
                title: 'Change Password successful!',
                description: 'Change Password Successfully! ✔, This is your new password: ' +
                    user.password,
                nameUser: user.name,
            },
        })
            .then(response => {
            console.log(response);
            console.log('Change Password: Send Mail successfully!');
        })
            .catch(err => {
            console.log(err);
            console.log('Change Password: Send Mail Failed!');
        });
    }
};
ChangePasswordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        mailer_1.MailerService])
], ChangePasswordService);
exports.ChangePasswordService = ChangePasswordService;
//# sourceMappingURL=change-password.service.js.map
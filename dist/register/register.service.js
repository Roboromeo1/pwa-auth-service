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
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const mailer_1 = require("@nestjs-modules/mailer");
let RegisterService = class RegisterService {
    constructor(usersService, mailerService) {
        this.usersService = usersService;
        this.mailerService = mailerService;
    }
    async register(registerUserDto) {
        registerUserDto.password = bcrypt.hashSync(registerUserDto.password, 8);
        this.sendMailRegisterUser(registerUserDto);
        return this.usersService.create(registerUserDto);
    }
    sendMailRegisterUser(user) {
        this.mailerService
            .sendMail({
            to: user.email,
            from: 'from@example.com',
            subject: 'Registration successful ✔',
            text: 'Registration successful!',
            template: 'index',
            context: {
                title: 'Registration successfully',
                description: "You did it! You registered!, You're successfully registered.✔",
                nameUser: user.name,
            },
        })
            .then(response => {
            console.log(response);
            console.log('User Registration: Send Mail successfully!');
        })
            .catch(err => {
            console.log(err);
            console.log('User Registration: Send Mail Failed!');
        });
    }
};
RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        mailer_1.MailerService])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map
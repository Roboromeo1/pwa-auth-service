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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
let LoginService = class LoginService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validate(loginDto) {
        return await this.usersService.findByEmail(loginDto.email);
    }
    async login(loginDto) {
        return this.validate(loginDto).then(userData => {
            if (!userData) {
                throw new common_1.UnauthorizedException();
            }
            const passwordIsValid = bcrypt.compareSync(loginDto.password, userData.password);
            if (!passwordIsValid == true) {
                return {
                    message: 'Authentication failed. Wrong password',
                    status: 400,
                };
            }
            const payload = {
                name: userData.name,
                email: userData.email,
                id: userData.id,
            };
            const accessToken = this.jwtService.sign(payload);
            return {
                expiresIn: 3600,
                accessToken: accessToken,
                user: payload,
                status: 200,
            };
        });
    }
    async validateUserByJwt(payload) {
        const user = await this.usersService.findByEmail(payload.email);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return this.createJwtPayload(user);
    }
    createJwtPayload(user) {
        const data = {
            email: user.email,
        };
        const jwt = this.jwtService.sign(data);
        return {
            expiresIn: 3600,
            token: jwt,
        };
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
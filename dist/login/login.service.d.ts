import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt.payload';
import { LoginDto } from './dto/login.dto';
export declare class LoginService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    private validate;
    login(loginDto: LoginDto): Promise<any | {
        status: number;
        message: string;
    }>;
    validateUserByJwt(payload: JwtPayload): Promise<{
        expiresIn: number;
        token: string;
    }>;
    protected createJwtPayload(user: any): {
        expiresIn: number;
        token: string;
    };
}

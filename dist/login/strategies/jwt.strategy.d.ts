import { LoginService } from '../login.service';
import { JwtPayload } from '../interfaces/jwt.payload';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly loginService;
    constructor(loginService: LoginService);
    validate(payload: JwtPayload): Promise<{
        expiresIn: number;
        token: string;
    }>;
}
export {};

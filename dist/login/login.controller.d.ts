import { LoginService } from './login.service';
import { LoginDto } from '../login/dto/login.dto';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(loginDto: LoginDto): Promise<any>;
}

import { RegisterService } from './register.service';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    register(res: any, registerUserDto: RegisterUserDto): Promise<any>;
}

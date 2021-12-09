import { UsersService } from '../users/users.service';
import { MailerService } from '@nestjs-modules/mailer';
import { RegisterUserDto } from './dto/register-user.dto';
import { IUsers } from './../users/interfaces/users.interface';
export declare class RegisterService {
    private readonly usersService;
    private readonly mailerService;
    constructor(usersService: UsersService, mailerService: MailerService);
    register(registerUserDto: RegisterUserDto): Promise<IUsers>;
    private sendMailRegisterUser;
}

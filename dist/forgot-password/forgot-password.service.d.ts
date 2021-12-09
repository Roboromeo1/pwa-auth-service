import { Repository } from 'typeorm';
import { Users } from '../users/entities/users.entity';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { MailerService } from '@nestjs-modules/mailer';
export declare class ForgotPasswordService {
    private userRepository;
    private readonly mailerService;
    constructor(userRepository: Repository<Users>, mailerService: MailerService);
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<any>;
    private sendMailForgotPassword;
}

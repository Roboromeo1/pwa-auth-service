import { ChangePasswordService } from '../change-password/change-password.service';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class ChangePasswordController {
    private readonly changePasswordService;
    constructor(changePasswordService: ChangePasswordService);
    changePassword(res: any, changePasswordDto: ChangePasswordDto): Promise<any>;
}

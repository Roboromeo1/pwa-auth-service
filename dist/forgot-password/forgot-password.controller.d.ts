import { ForgotPasswordService } from "../forgot-password/forgot-password.service";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
export declare class ForgotPasswordController {
    private readonly forgotPasswordService;
    constructor(forgotPasswordService: ForgotPasswordService);
    forgotPassword(res: any, forgotPasswordDto: ForgotPasswordDto): Promise<any>;
}

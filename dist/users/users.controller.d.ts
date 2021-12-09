import { UsersService } from "./users.service";
import { UserProfileDto } from "./dto/user-profile.dto";
import { IUsers } from "./interfaces/users.interface";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(res: any, userId: string): Promise<IUsers>;
    updateProfileUser(res: any, userId: string, userProfileDto: UserProfileDto): Promise<any>;
}

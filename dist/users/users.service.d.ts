import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { IUsers } from './interfaces/users.interface';
import { UserDto } from './dto/user.dto';
import { UserProfileDto } from './dto/user-profile.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    findByEmail(email: string): Promise<Users>;
    findById(userId: string): Promise<Users>;
    create(userDto: UserDto): Promise<IUsers>;
    updateByEmail(email: string): Promise<Users>;
    updateByPassword(email: string, password: string): Promise<Users>;
    updateProfileUser(id: string, userProfileDto: UserProfileDto): Promise<Users>;
}

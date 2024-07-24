import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/user.dto";
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<any>;
    createUser(data: CreateUserDTO): Promise<{
        stauts: number;
        data: import("../../database/entities/user.entity").UserEntity;
    }>;
}

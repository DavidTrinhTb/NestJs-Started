import { UserRepository } from "src/modules/database/repositories/user.repository";
import { CreateUserDTO } from "./dto/user.dto";
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(data: CreateUserDTO): Promise<{
        stauts: number;
        data: import("../../database/entities/user.entity").UserEntity;
    }>;
    getUsers(): Promise<any>;
}

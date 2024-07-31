import { DataSource, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
export declare class UserRepositories extends Repository<UserEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    getUsers(): Promise<any>;
}

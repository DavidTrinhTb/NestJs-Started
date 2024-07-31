import { DataSource, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
export declare class AuthRepostories extends Repository<UserEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    findUserByAddress(address: string): Promise<any>;
    signUp(address: string): Promise<UserEntity>;
}

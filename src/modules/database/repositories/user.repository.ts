import { DataSource, Repository } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";

export class UserRepository extends Repository<UserEntity> {
  constructor(@InjectDataSource() private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  // async findUserByAddress(address: string): Promise<UserEntity | undefined> {
  //   return this.createQueryBuilder("user")
  //     .where("user.address = :address", { address })
  //     .take(1)
  //     .getOne();
  // }

  async getUsers(): Promise<any> {
    const user = await this.find();
    return user;
  }

  async createUser(address: string): Promise<UserEntity> {
    const user: Partial<UserEntity> = {
      wallet_address: address,
    };
    return this.save(user);
  }
}

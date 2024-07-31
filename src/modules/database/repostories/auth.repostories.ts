import { DataSource, Repository } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";

export class AuthRepostories extends Repository<UserEntity> {
  constructor(@InjectDataSource() private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async findUserByAddress(address: string): Promise<any> {
    const user = await this.findOne({
      where: { wallet_address: address },
    });
    return user;
  }

  async signUp(address: string): Promise<UserEntity> {
    const user: Partial<UserEntity> = {
      wallet_address: address,
    };
    return this.save(user);
  }
}

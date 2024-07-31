import { DataSource, Repository } from "typeorm";
import { InjectDataSource } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";

export class UserRepositories extends Repository<UserEntity> {
  constructor(@InjectDataSource() private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async getUsers(): Promise<any> {
    return await this.find();
  }
}

import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UsersController } from "./user/user.controller";
import { UserService } from "./user/user.service";

const controllers = [UsersController];
const services = [UserService];

@Module({
  imports: [DatabaseModule],
  controllers: [...controllers],
  providers: [...services],
  exports: [...services],
})
export class ApiModule {}

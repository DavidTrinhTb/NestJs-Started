import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configDb } from "./config";
import { UserEntity } from "./entities/user.entity";
import { UserRepositories } from "./repostories/user.repostories";
import { AuthRepostories } from "./repostories/auth.repostories";
import { TokensEntity } from "./entities/token.entity";

const repositories = [UserRepositories, AuthRepostories];

const entities = [UserEntity, TokensEntity];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get("db"),
      inject: [ConfigService],
    }),

    TypeOrmModule.forFeature(entities),

    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configDb],
    }),
  ],
  controllers: [],
  providers: [...repositories],
  exports: [...repositories],
})
export class DatabaseModule {}

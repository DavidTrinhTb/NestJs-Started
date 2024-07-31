import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UsersController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { AuthService } from "./auth/auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { SignInController, SignUpController } from "./auth/auth.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { configAuth } from "./auth/configs/auth";

const controllers = [UsersController, SignInController, SignUpController];
const services = [UserService, AuthService, JwtService];

@Module({
  imports: [
    DatabaseModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [configAuth],
    }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>("auth.jwt.jwt_secret_key"),
          signOptions: { expiresIn: "1h" },
          global: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [...controllers],
  providers: [...services],
  exports: [...services],
})
export class ApiModule {}

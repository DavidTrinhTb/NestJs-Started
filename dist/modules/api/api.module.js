"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const auth_service_1 = require("./auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth/auth.controller");
const config_1 = require("@nestjs/config");
const auth_1 = require("./auth/configs/auth");
const controllers = [user_controller_1.UsersController, auth_controller_1.SignInController, auth_controller_1.SignUpController];
const services = [user_service_1.UserService, auth_service_1.AuthService, jwt_1.JwtService];
let ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [auth_1.configAuth],
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        secret: configService.get("auth.jwt.jwt_secret_key"),
                        signOptions: { expiresIn: "1h" },
                        global: true,
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [...controllers],
        providers: [...services],
        exports: [...services],
    })
], ApiModule);
//# sourceMappingURL=api.module.js.map
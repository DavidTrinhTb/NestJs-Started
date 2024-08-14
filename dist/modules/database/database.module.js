"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const config_2 = require("./config");
const user_entity_1 = require("./entities/user.entity");
const user_repostories_1 = require("./repostories/user.repostories");
const auth_repostories_1 = require("./repostories/auth.repostories");
const token_entity_1 = require("./entities/token.entity");
const repositories = [user_repostories_1.UserRepositories, auth_repostories_1.AuthRepostories];
const entities = [user_entity_1.UserEntity, token_entity_1.TokensEntity];
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (config) => config.get("db"),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature(entities),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                expandVariables: true,
                load: [config_2.configDb],
            }),
        ],
        controllers: [],
        providers: [...repositories],
        exports: [...repositories],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map
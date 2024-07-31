"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const pagination_1 = require("../../common/pagination/pagination");
const user_repostories_1 = require("../../database/repostories/user.repostories");
const base_response_1 = require("../../common/response/base.response");
let UserService = class UserService {
    constructor(userRepositories) {
        this.userRepositories = userRepositories;
    }
    async getUsers(query) {
        try {
            const pagination = await (0, pagination_1.paginateTypeORM)(this.userRepositories, query.page, query.take);
            return new base_response_1.BaseResponse(pagination, common_1.HttpStatus.OK, "react message successfully");
        }
        catch (error) { }
    }
    async updateUser({ wallet_address, user_name }) {
        try {
            const user = await this.userRepositories.findOne({
                where: { wallet_address: wallet_address },
            });
            if (user) {
                const res = await this.userRepositories.update({
                    wallet_address,
                }, {
                    user_name,
                });
                return res.affected > 0;
            }
            return new base_response_1.BaseResponse({}, common_1.HttpStatus.BAD_REQUEST, "Can not find user to update");
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async getUserDetail() {
        return await this.userRepositories.getUsers();
    }
    async deleteUser({ wallet_address }) {
        try {
            const user = await this.userRepositories.findOne({
                where: { wallet_address: wallet_address },
            });
            if (user) {
                const res = await this.userRepositories.softDelete({
                    wallet_address: wallet_address,
                });
                return res.affected > 0;
            }
            return new base_response_1.BaseResponse({}, common_1.HttpStatus.BAD_REQUEST, "Can not find user");
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repostories_1.UserRepositories])
], UserService);
//# sourceMappingURL=user.service.js.map
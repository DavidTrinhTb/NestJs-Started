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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = exports.SignInController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const base_response_1 = require("../../common/response/base.response");
const auth_dto_1 = require("./dto/auth.dto");
const swagger_1 = require("@nestjs/swagger");
let SignInController = class SignInController {
    constructor(authService) {
        this.authService = authService;
    }
    async signIn(data) {
        const res = await this.authService.signIn(data);
        return new base_response_1.BaseResponse(res, common_1.HttpStatus.CREATED, "login successfully");
    }
};
exports.SignInController = SignInController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], SignInController.prototype, "signIn", null);
exports.SignInController = SignInController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)("sign-in"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], SignInController);
let SignUpController = class SignUpController {
    constructor(authService) {
        this.authService = authService;
    }
    signUp(data) {
        const res = this.authService.signUp(data);
        return new base_response_1.BaseResponse(res, common_1.HttpStatus.CREATED, "create user successfully");
    }
};
exports.SignUpController = SignUpController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SignUpDto]),
    __metadata("design:returntype", void 0)
], SignUpController.prototype, "signUp", null);
exports.SignUpController = SignUpController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)("sign-up"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], SignUpController);
//# sourceMappingURL=auth.controller.js.map
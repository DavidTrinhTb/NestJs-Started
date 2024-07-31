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
exports.DeleteUserDTO = exports.UpdateUserDTO = exports.GetListUserDTO = exports.DetailUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const paginate_dto_1 = require("../../../common/pagination/paginate.dto");
class DetailUserDTO {
}
exports.DetailUserDTO = DetailUserDTO;
class GetListUserDTO extends paginate_dto_1.PaginateDto {
}
exports.GetListUserDTO = GetListUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetListUserDTO.prototype, "address", void 0);
class UpdateUserDTO {
}
exports.UpdateUserDTO = UpdateUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "wallet_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "user_name", void 0);
class DeleteUserDTO {
}
exports.DeleteUserDTO = DeleteUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], DeleteUserDTO.prototype, "wallet_address", void 0);
//# sourceMappingURL=user.dto.js.map
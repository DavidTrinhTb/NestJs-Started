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
exports.BaseResponse = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const pagination_interface_1 = require("../pagination/pagination.interface");
class BaseResponse {
    constructor(data, statusCode = common_1.HttpStatus.OK, message, pagination) {
        this.msg = message || "";
        this.data = data;
        this.status_code = statusCode;
        this.timestamp = new Date().toISOString();
        if (pagination) {
            this.pagination = pagination;
        }
    }
}
exports.BaseResponse = BaseResponse;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], BaseResponse.prototype, "data", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], BaseResponse.prototype, "msg", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "status_code" }),
    __metadata("design:type", Number)
], BaseResponse.prototype, "status_code", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "timestamp" }),
    __metadata("design:type", String)
], BaseResponse.prototype, "timestamp", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "pagination" }),
    __metadata("design:type", pagination_interface_1.PaginationResponse)
], BaseResponse.prototype, "pagination", void 0);
//# sourceMappingURL=base.response.js.map
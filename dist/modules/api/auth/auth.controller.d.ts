import { HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { BaseResponse } from "src/modules/common/response/base.response";
import { SignInDto, SignUpDto } from "./dto/auth.dto";
export declare class SignInController {
    private authService;
    constructor(authService: AuthService);
    signIn(data: SignInDto): Promise<BaseResponse<{
        access_token: string;
    }>>;
}
export declare class SignUpController {
    private authService;
    constructor(authService: AuthService);
    signUp(data: SignUpDto): BaseResponse<Promise<{
        stauts: HttpStatus;
        data: import("../../database/entities/user.entity").UserEntity;
    }>>;
}

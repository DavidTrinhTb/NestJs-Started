import { HttpStatus } from "@nestjs/common";
import { SignInDto, SignUpDto } from "./dto/auth.dto";
import { AuthRepostories } from "src/modules/database/repostories/auth.repostories";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly jwtService;
    private readonly authRepostories;
    constructor(jwtService: JwtService, authRepostories: AuthRepostories);
    signIn(data: SignInDto): Promise<{
        access_token: string;
    }>;
    signUp(data: SignUpDto): Promise<{
        stauts: HttpStatus;
        data: import("../../database/entities/user.entity").UserEntity;
    }>;
}

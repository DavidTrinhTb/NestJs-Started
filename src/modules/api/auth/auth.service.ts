import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { SignInDto, SignUpDto } from "./dto/auth.dto";
import { AuthRepostories } from "src/modules/database/repostories/auth.repostories";
import { JwtService } from "@nestjs/jwt";
import { TJWTPayload } from "src/modules/common/types";

@Injectable()
export class AuthService {
  constructor(
    @Inject(JwtService)
    private readonly jwtService: JwtService,
    private readonly authRepostories: AuthRepostories
  ) {}

  async signIn(data: SignInDto) {
    const res = await this.authRepostories.findUserByAddress(
      data.wallet_address
    );

    if (res) {
      const payload: TJWTPayload = {
        sub: res?.id,
        address: data.wallet_address,
      };

      return {
        access_token: await this.jwtService.signAsync(payload, {
          expiresIn: "7d",
          secret: process.env.JWT_SECRET_KEY || "defaultSecret",
        }),
      };
    }
  }

  async signUp(data: SignUpDto) {
    const res = await this.authRepostories.signUp(data.wallet_address);

    return {
      stauts: HttpStatus.CREATED,
      data: res,
    };
  }
}

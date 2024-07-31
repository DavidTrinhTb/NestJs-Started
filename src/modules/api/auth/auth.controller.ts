import { Body, Controller, HttpStatus, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { BaseResponse } from "src/modules/common/response/base.response";
import { SignInDto, SignUpDto } from "./dto/auth.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("sign-in")
export class SignInController {
  constructor(private authService: AuthService) {}

  @Post()
  async signIn(@Body() data: SignInDto) {
    const res = await this.authService.signIn(data);

    return new BaseResponse(res, HttpStatus.CREATED, "login successfully");
  }
}

@ApiTags("Auth")
@Controller("sign-up")
export class SignUpController {
  constructor(private authService: AuthService) {}

  @Post()
  signUp(@Body() data: SignUpDto) {
    const res = this.authService.signUp(data);

    return new BaseResponse(
      res,
      HttpStatus.CREATED,
      "create user successfully"
    );
  }
}

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { TJWTPayload } from "../types";

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): TJWTPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request?.user || { sub: "9e077ee3-300e-4260-aaa0-f06768e58030" };
  }
);

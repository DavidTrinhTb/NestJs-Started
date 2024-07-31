import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/guards/jwt-auth.guard";
import { DeleteUserDTO, GetListUserDTO, UpdateUserDTO } from "./dto/user.dto";

@ApiTags("User")
@Controller("users")
export class UsersController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getUsers(@Query() query: GetListUserDTO) {
    return this.userService.getUsers(query);
  }

  @Get("/:id")
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getDetailUser() {
    return this.userService.getUserDetail();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete("/:wallet_address")
  deleteUser(@Param() { wallet_address }: DeleteUserDTO) {
    return this.userService.deleteUser({ wallet_address });
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put("/:wallet_address")
  updateUser(@Body() body: UpdateUserDTO) {
    return this.userService.updateUser(body);
  }
}

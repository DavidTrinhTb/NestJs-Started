import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { paginateTypeORM } from "src/modules/common/pagination/pagination";
import { UserRepositories } from "src/modules/database/repostories/user.repostories";
import { DeleteUserDTO, GetListUserDTO, UpdateUserDTO } from "./dto/user.dto";
import { BaseResponse } from "src/modules/common/response/base.response";

@Injectable()
export class UserService {
  constructor(private userRepositories: UserRepositories) {}

  async getUsers(query: GetListUserDTO) {
    try {
      const pagination = await paginateTypeORM(
        this.userRepositories,
        query.page,
        query.take
      );

      return new BaseResponse(
        pagination,
        HttpStatus.OK,
        "react message successfully"
      );
    } catch (error) {}
  }

  async updateUser({ wallet_address, user_name }: UpdateUserDTO) {
    try {
      const user = await this.userRepositories.findOne({
        where: { wallet_address: wallet_address },
      });

      if (user) {
        const res = await this.userRepositories.update(
          {
            wallet_address,
          },
          {
            user_name,
          }
        );

        return res.affected > 0;
      }

      return new BaseResponse(
        {},
        HttpStatus.BAD_REQUEST,
        "Can not find user to update"
      );
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async getUserDetail() {
    return await this.userRepositories.getUsers();
  }

  async deleteUser({ wallet_address }: DeleteUserDTO) {
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

      return new BaseResponse({}, HttpStatus.BAD_REQUEST, "Can not find user");
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

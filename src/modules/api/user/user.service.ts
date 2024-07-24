import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/modules/database/repositories/user.repository";
import { CreateUserDTO } from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(data: CreateUserDTO) {
    const res = await this.userRepository.createUser(data.wallet_address);

    return {
      stauts: 200,
      data: res,
    };
  }

  async getUsers() {
    return await this.userRepository.getUsers();
  }
}

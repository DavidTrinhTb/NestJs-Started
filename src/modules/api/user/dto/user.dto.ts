import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty()
  wallet_address: string;
}

export class DetailUserDTO {
  wallet_address: string;
  nonce: number;
}

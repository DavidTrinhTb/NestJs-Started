import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
  @ApiProperty()
  wallet_address: string;
}

export class SignUpDto {
  @ApiProperty()
  wallet_address: string;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { PaginateDto } from "src/modules/common/pagination/paginate.dto";

export class DetailUserDTO {
  wallet_address: string;
  nonce: number;
}

export class GetListUserDTO extends PaginateDto {
  @ApiProperty({ required: false })
  @IsOptional()
  address: string;
}

export class UpdateUserDTO {
  @ApiProperty({ required: true })
  wallet_address: string;

  @ApiProperty({ required: true })
  user_name: string;
}

export class DeleteUserDTO {
  @ApiProperty({ required: true })
  wallet_address: string;
}

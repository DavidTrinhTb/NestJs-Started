import { PaginateDto } from "src/modules/common/pagination/paginate.dto";
export declare class DetailUserDTO {
    wallet_address: string;
    nonce: number;
}
export declare class GetListUserDTO extends PaginateDto {
    address: string;
}
export declare class UpdateUserDTO {
    wallet_address: string;
    user_name: string;
}
export declare class DeleteUserDTO {
    wallet_address: string;
}

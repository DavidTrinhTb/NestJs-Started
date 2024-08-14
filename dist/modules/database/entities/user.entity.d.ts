import { BaseEntity } from "./base.entity";
export declare class UserEntity extends BaseEntity {
    id: string;
    user_name?: string;
    wallet_address: string;
    nonce: number;
}

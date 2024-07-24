import { BaseEntity } from "./base.entity";
export declare class UserEntity extends BaseEntity {
    user_name?: string;
    wallet_address: string;
    nonce: number;
}

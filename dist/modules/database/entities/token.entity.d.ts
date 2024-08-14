import { BaseEntity } from "./base.entity";
export declare class TokensEntity extends BaseEntity {
    id: string;
    address: string;
    symbol: string;
    decimals: number;
    balance: number;
}

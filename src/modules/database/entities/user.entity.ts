import { Entity, Column, Index, PrimaryColumn, In } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("users")
@Index(["user_name", "wallet_address"])
export class UserEntity extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  user_name?: string;

  @Column({ unique: true })
  @Index()
  wallet_address: string;

  @Column({ default: 0 })
  nonce: number;
}

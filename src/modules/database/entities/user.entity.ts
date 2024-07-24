import { Entity, Column, Index } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("users")
export class UserEntity extends BaseEntity {
  @Column({ nullable: true, name: "user_name" })
  user_name?: string;

  @Column({ unique: true, nullable: true })
  @Index()
  wallet_address: string;

  @Column({ default: 0 })
  nonce: number;
}

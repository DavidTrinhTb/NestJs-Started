import { Entity, Column, Index, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("tokens")
export class TokensEntity extends BaseEntity {
  @Column({ unique: true, nullable: true })
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  address: string;

  @Column()
  symbol: string;

  @Column()
  decimals: number;

  @Column()
  balance: number;
}

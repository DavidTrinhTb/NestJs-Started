import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const configDb = registerAs(
  "db",
  (): TypeOrmModuleOptions => ({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_DATABASE || "first_db",
    synchronize: Boolean(process.env.DB_SYNC) || true,
    autoLoadEntities: true,
    logging: false,
  })
);

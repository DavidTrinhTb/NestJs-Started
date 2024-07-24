"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDb = void 0;
const config_1 = require("@nestjs/config");
exports.configDb = (0, config_1.registerAs)("db", () => ({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_DATABASE || "first_db",
    synchronize: Boolean(process.env.DB_SYNC) || true,
    autoLoadEntities: true,
    logging: false,
}));
//# sourceMappingURL=database.js.map
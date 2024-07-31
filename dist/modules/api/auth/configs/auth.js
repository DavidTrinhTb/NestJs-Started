"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configAuth = void 0;
const config_1 = require("@nestjs/config");
exports.configAuth = (0, config_1.registerAs)("auth", () => ({
    jwt: {
        jwt_secret_key: process.env.JWT_SECRET_KEY || "jwt-secret",
        access_token_lifetime: 60 * 60 * 24 * 7,
    },
}));
//# sourceMappingURL=auth.js.map
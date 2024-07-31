export declare const configAuth: (() => {
    jwt: {
        jwt_secret_key: string;
        access_token_lifetime: number;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    jwt: {
        jwt_secret_key: string;
        access_token_lifetime: number;
    };
}>;

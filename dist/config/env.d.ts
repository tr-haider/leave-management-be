declare class EnvConfig {
    private readonly envConfig;
    get JWT_SECRET(): string;
    get JWT_TOKEN_EXPIRATION_IN_HOURS(): number;
    get JWT_REFRESH_TOKEN_SECRET(): string;
    get JWT_REFRESH_TOKEN_EXPIRATION_IN_HOURS(): number;
}
export declare const ENV: EnvConfig;
export {};

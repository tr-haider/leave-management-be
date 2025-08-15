"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
class EnvConfig {
    envConfig;
    get JWT_SECRET() {
        return 'jwt-secret-leave-mangement-system';
    }
    get JWT_TOKEN_EXPIRATION_IN_HOURS() {
        return 2;
    }
    get JWT_REFRESH_TOKEN_SECRET() {
        return 'jwt-secret-leave-mangement-system';
    }
    get JWT_REFRESH_TOKEN_EXPIRATION_IN_HOURS() {
        return 24;
    }
}
exports.ENV = new EnvConfig();
//# sourceMappingURL=env.js.map
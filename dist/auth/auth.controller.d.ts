import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            isAdmin: any;
        };
    }>;
    logout(): {
        message: string;
    };
    changePassword(userId: string, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}

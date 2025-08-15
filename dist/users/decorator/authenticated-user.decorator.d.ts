export interface AuthenticatedUserType {
    id: string;
    email: string;
}
export declare const AuthenticatedUser: (...dataOrPipes: any[]) => ParameterDecorator;

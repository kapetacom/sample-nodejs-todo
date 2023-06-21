//
// GENERATED SOURCE - DO NOT EDIT
//
import { UserRegistration } from "../entities/UserRegistration";
import { UserActivation } from "../entities/UserActivation";
import { UserSession } from "../entities/UserSession";
import { UserAuthentication } from "../entities/UserAuthentication";
import { PasswordChangeRequest } from "../entities/PasswordChangeRequest";
import { User } from "../entities/User";

export interface IUsersRouteService {
    /**
     * Register new user
     * HTTP: POST /register
     */
    registerUser(user: UserRegistration): Promise<void>;

    /**
     * Activate user registration
     * HTTP: POST /activate
     */
    activateUser(user: UserActivation): Promise<void>;

    /**
     * Authenticate user
     * HTTP: POST /authenticate
     */
    authenticationUser(user: UserAuthentication): Promise<UserSession>;

    /**
     * Reset password for user
     * HTTP: POST /reset_password
     */
    resetPassword(email: string): Promise<void>;

    /**
     * Change password for user
     * HTTP: POST /change_password
     */
    changePassword(change: PasswordChangeRequest): Promise<void>;

    /**
     * Get user by id
     * HTTP: GET /users/{id}
     */
    getUser(id: string): Promise<User>;
}

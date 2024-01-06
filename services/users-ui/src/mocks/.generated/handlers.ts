import { users_registerUserHandler } from '../handlers/users/registerUserHandler';
import { users_activateUserHandler } from '../handlers/users/activateUserHandler';
import { users_authenticationUserHandler } from '../handlers/users/authenticationUserHandler';
import { users_resetPasswordHandler } from '../handlers/users/resetPasswordHandler';
import { users_changePasswordHandler } from '../handlers/users/changePasswordHandler';
import { users_getUserHandler } from '../handlers/users/getUserHandler';
export const handlers = [
    users_registerUserHandler,
    users_activateUserHandler,
    users_authenticationUserHandler,
    users_resetPasswordHandler,
    users_changePasswordHandler,
    users_getUserHandler,
];

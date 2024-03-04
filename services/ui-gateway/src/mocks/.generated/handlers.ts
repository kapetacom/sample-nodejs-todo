import { sortHandlersByPathSpecificity } from './sortHandlers';
import { Users_registerUserHandler } from '../handlers/users/registerUserHandler';
import { Users_activateUserHandler } from '../handlers/users/activateUserHandler';
import { Users_authenticationUserHandler } from '../handlers/users/authenticationUserHandler';
import { Users_resetPasswordHandler } from '../handlers/users/resetPasswordHandler';
import { Users_getUserHandler } from '../handlers/users/getUserHandler';

export const handlers = sortHandlersByPathSpecificity([
    Users_registerUserHandler,
    Users_activateUserHandler,
    Users_authenticationUserHandler,
    Users_resetPasswordHandler,
    Users_getUserHandler,
]);

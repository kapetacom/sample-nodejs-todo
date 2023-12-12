import { registerUserHandler } from "./handlers/users/registerUserHandler";
import { activateUserHandler } from "./handlers/users/activateUserHandler";
import { authenticationUserHandler } from "./handlers/users/authenticationUserHandler";
import { resetPasswordHandler } from "./handlers/users/resetPasswordHandler";
import { changePasswordHandler } from "./handlers/users/changePasswordHandler";
import { getUserHandler } from "./handlers/users/getUserHandler";

export const handlers = [
    registerUserHandler,
    activateUserHandler,
    authenticationUserHandler,
    resetPasswordHandler,
    changePasswordHandler,
    getUserHandler,
];

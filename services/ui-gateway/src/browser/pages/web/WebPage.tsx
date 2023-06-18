import React from 'react';
import {Link, Outlet, Route, Routes, BrowserRouter} from "react-router-dom";
import {LoginForm} from "../../components/LoginForm";
import {SignupForm} from "../../components/SignupForm";
import {ResetPasswordForm} from "../../components/ResetPasswordForm";


import {isAuthed, Logout, RequireAuth, RequireNonAuth} from "../../auth/auth";
import {ActivateForm} from "../../components/ActivateForm";
import {UserwebFragment} from "../../fragments/UserwebFragment";
import {TodowebFragment} from "../../fragments/TodowebFragment";


export const WebPage = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/login" element={
                        <RequireNonAuth>
                            <LoginForm/>
                        </RequireNonAuth>
                    }/>
                    <Route path="/signup" element={
                        <RequireNonAuth>
                            <SignupForm/>
                        </RequireNonAuth>
                    }/>
                    <Route path="/reset-password" element={
                        <RequireNonAuth>
                            <ResetPasswordForm/>
                        </RequireNonAuth>
                    }/>
                    <Route path="/activate/:id" element={
                        <RequireNonAuth>
                            <ActivateForm />
                        </RequireNonAuth>
                    }/>
                    <Route path="/logout" element={
                        <Logout />
                    }/>
                    <Route path="/user" element={
                        <RequireAuth>
                            <UserwebFragment/>
                        </RequireAuth>
                    }/>
                    <Route path="/" element={
                        <RequireAuth>
                            <TodowebFragment />
                        </RequireAuth>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const Layout = () => {
    return (
        <div>
            <h1>Sample Todo App</h1>
            <menu>
                {isAuthed() &&
                    <>
                        <li>
                            <Link to="/">Tasks</Link>
                        </li>
                        <li>
                            <Link to="/user">Settings</Link>
                        </li>
                        <li>
                            <Link to="/logout">Log out</Link>
                        </li>
                    </>
                }
                {!isAuthed() &&
                    <>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/reset-password">Forgot password</Link>
                        </li>
                    </>
                }
            </menu>

            <Outlet/>
        </div>
    );
}
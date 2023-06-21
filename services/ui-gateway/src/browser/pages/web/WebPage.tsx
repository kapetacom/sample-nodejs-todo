import React, {useEffect} from 'react';
import {Link, Outlet, Route, Routes, BrowserRouter, useLocation, useNavigate} from "react-router-dom";
import {LoginForm} from "../../components/LoginForm";


import {isAuthed, Logout, RequireAuth, RequireNonAuth} from "../../auth/auth";
import {ActivateForm} from "../../components/ActivateForm";
import {SignupForm} from "../../components/SignupForm";
import {ResetPasswordForm} from "../../components/ResetPasswordForm";
import {UserwebFragment} from "../../fragments/UserwebFragment";
import {TodowebFragment} from "../../fragments/TodowebFragment";
import {FrameRouter} from "@kapeta/sdk-web-microfrontend-frame";
import './WebPage.less';


export const WebPage = () => {
    return (
        <FrameRouter>
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
                    <Route path="/activation/:id" element={
                        <RequireNonAuth>
                            <ActivateForm/>
                        </RequireNonAuth>
                    }/>
                    <Route path="/logout" element={
                        <Logout/>
                    }/>
                    <Route path="/user/*"  element={
                        <RequireAuth>
                            <UserwebFragment  topPath="/user" />
                        </RequireAuth>
                    }/>

                    <Route path="/*" element={
                        <RequireAuth>
                            <TodowebFragment topPath="/" />
                        </RequireAuth>
                    }/>
                </Route>
            </Routes>
        </FrameRouter>
    );
};


const Layout = () => {
    return (
        <main>
            <h1>Sample Todo App</h1>
            <div className="container">
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
                <article>
                    <Outlet/>
                </article>
            </div>
        </main>
    );
}

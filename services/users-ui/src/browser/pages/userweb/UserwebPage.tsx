import React from "react";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {FrameRouter} from "@kapeta/sdk-web-microfrontend-frame";

export const UserwebPage = () => {

    return (
        <FrameRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/change-password" element={<div>TODO: Change Password</div>}/>
                    <Route path="/" element={<div>TODO: User info</div>}/>
                </Route>
            </Routes>
        </FrameRouter>
    );
};


const Layout = () => {
    return (
        <main>
            <div className="container">
                <menu>
                    <li>
                        <Link to="">Settings</Link>
                    </li>
                    <li>
                        <Link to="/change-password">Change password</Link>
                    </li>
                </menu>
                <article>
                    <Outlet/>
                </article>
            </div>
        </main>
    );
}
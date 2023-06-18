import React from "react";
import {Navigate, useLocation} from "react-router-dom";

const TOKEN_ID = 'token';
export function getCurrentToken() {
    return localStorage.getItem(TOKEN_ID)
}

export function setCurrentToken(token:string) {
    return localStorage.setItem(TOKEN_ID, token);
}

export function removeCurrentToken() {
    return localStorage.removeItem(TOKEN_ID);
}

export function isAuthed() {
    return getCurrentToken() !== null
}
export function RequireAuth({ children }: { children: React.JSX.Element }) {
    let location = useLocation();
    if (!isAuthed()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export function RequireNonAuth({ children }: { children: React.JSX.Element }) {
    if (isAuthed()) {
        return <Navigate to="/"  replace />;
    }
    return children;
}

export function Logout() {

    removeCurrentToken();
    location.href = '/login';
    return <Navigate to="/"  replace />;
}
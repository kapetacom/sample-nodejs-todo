import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {UserSession} from "../../entities/UserSession";

const SESSION_KEY = 'SESSION'
export function getCurrentSession() {
    const json = localStorage.getItem(SESSION_KEY);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as UserSession;
}

export function setCurrentSession(token:UserSession) {
    return localStorage.setItem(SESSION_KEY, JSON.stringify(token));
}

export function removeCurrentSession() {
    return localStorage.removeItem(SESSION_KEY);
}

export function isAuthed() {
    return localStorage.getItem(SESSION_KEY) !== null
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

    removeCurrentSession();
    location.href = '/login';
    return <Navigate to="/"  replace />;
}
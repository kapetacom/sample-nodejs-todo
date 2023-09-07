import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserSession } from '../../entities/UserSession';

const SESSION_KEY = 'SESSION';
function getCurrentSession() {
    const json = localStorage.getItem(SESSION_KEY);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as UserSession;
}

function setCurrentSession(token: UserSession) {
    return localStorage.setItem(SESSION_KEY, JSON.stringify(token));
}

function removeCurrentSession() {
    return localStorage.removeItem(SESSION_KEY);
}

const authContext = React.createContext({
    isAuthenticated: () => false,
    setSession: (session: UserSession | null) => {
        // noop
    },
} as {
    isAuthenticated: () => boolean;
    setSession: (session: UserSession | null) => void;
});

export const AuthProvider = (props: PropsWithChildren) => {
    const [sessionState, setSessionState] = React.useState<UserSession | null>(getCurrentSession());
    const setSession = useCallback((session: UserSession | null) => {
        if (session) {
            setCurrentSession(session);
        } else {
            removeCurrentSession();
        }
        setSessionState(session);
    }, []);

    return (
        <authContext.Provider
            value={{
                isAuthenticated: () => !!sessionState,
                setSession,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
};

export function useAuth() {
    return React.useContext(authContext);
}

export function RequireAuth({ children }: { children: React.JSX.Element }) {
    const location = useLocation();
    const auth = useAuth();
    if (!auth.isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export function RequireNonAuth({ children }: { children: React.JSX.Element }) {
    const auth = useAuth();
    if (auth.isAuthenticated()) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export function Logout() {
    const auth = useAuth();
    useEffect(() => {
        auth.setSession(null);
    }, [auth]);
    return <Navigate to="/" replace />;
}

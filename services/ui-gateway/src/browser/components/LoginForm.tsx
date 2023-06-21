import React, {useCallback, useMemo, useState} from "react";
import {UsersClient} from "../clients/UsersClient";
import {removeCurrentSession, setCurrentSession} from "../auth/auth";
import {useLocation} from "react-router-dom";

export const LoginForm = () => {

    const location = useLocation()
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);

    const doLogin = useCallback(async () => {
        try {
            const session = await usersClient.authenticationUser({
                password,
                email
            });
            setCurrentSession(session);
            setError('');
            window.location.pathname = '/';
        } catch (e: any) {
            removeCurrentSession();
            setError(e.message);
        }
    }, [email, password, usersClient]);

    return (
        <>
            {error && <div>Failed to log in: {error}</div>}
            <form onSubmit={(evt) => {
                evt.preventDefault();
                doLogin()
            }}>
                <div>
                    <label htmlFor="username">E-mail</label>
                    <input type="email"
                           required={true}
                           value={email}
                           onChange={evt => setEmail(evt.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           required={true}
                           minLength={4}
                           value={password}
                           onChange={evt => setPassword(evt.target.value)}/>
                </div>
                <button type="submit">Log in</button>
            </form>
        </>
    )
}
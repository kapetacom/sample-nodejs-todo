import React, {useCallback, useMemo, useState} from "react";
import {UsersClient} from "../clients/UsersClient";
import {useParams} from "react-router-dom";


export const ActivateForm = () => {
    const { id } = useParams();

    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);



    const doActivate = useCallback(async () => {
        try {
            if (!id) {
                throw new Error('Invalid activation link');
            }

            await usersClient.activateUser({
                id,
                password,
                password2
            });
            setError('');
        } catch (e: any) {
            setError(e.message);
        }
    }, [id, password, password2, usersClient]);

    if (!id) {
        return (<div>Invalid activation link</div>);
    }

    return (
        <>
            {error && <div>Failed to activate: {error}</div>}
            <p>
                Choose a password and activate your account.
            </p>
            <form onSubmit={async (evt) => {
                evt.preventDefault();
                await doActivate();
            }}>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id='password'
                           value={password}
                           minLength={4}
                           required={true}
                           onChange={evt => setPassword(evt.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password2">Repeat password</label>
                    <input type="password"
                           id='password2'
                           value={password}
                           minLength={4}
                           required={true}
                           onChange={evt => setPassword2(evt.target.value)}/>
                </div>
                <button type="submit">Activate</button>
            </form>
        </>
    )
}
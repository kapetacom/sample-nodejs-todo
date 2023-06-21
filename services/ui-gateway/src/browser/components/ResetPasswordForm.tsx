import React, {useCallback, useMemo, useState} from "react";
import {UsersClient} from "../clients/UsersClient";

export const ResetPasswordForm = () => {

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);

    const doReset = useCallback(async () => {
        try {
            await usersClient.resetPassword(email);
            setError('');
        } catch (e: any) {
            setError(e.message);
        }
    }, [email, usersClient]);

    return (
        <>
            {error && <div>Failed to reset: {error}</div>}
            <form onSubmit={(evt) => {
                evt.preventDefault();
                doReset()
            }}>
                <div>
                    <label htmlFor="username">E-mail</label>
                    <input type="email"
                           required={true}
                           value={email}
                           onChange={evt => setEmail(evt.target.value)} />
                </div>
                <button type="submit">Reset password</button>
            </form>
        </>
    )
}
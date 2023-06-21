import React, {useCallback, useMemo, useState} from "react";
import {UsersClient} from "../clients/UsersClient";
import {useParams} from "react-router-dom";
import {getCurrentSession} from "../auth/auth";


export const ChangePasswordForm = () => {

    const session = getCurrentSession()
    if (!session) {
        return <div>Not logged in</div>
    }

    const [error, setError] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);


    const doChangePassword = useCallback(async () => {
        try {
            await usersClient.changePassword({
                oldPassword: oldPassword,
                password: password,
                password2: password2,
                id: session.userId
            });
            setError('');
            setOldPassword('');
            setPassword('');
            setPassword2('');
            alert('Password changed!');
        } catch (e: any) {
            setError(e.message);
        }
    }, [oldPassword, password, password2, usersClient]);


    return (
        <>
            {error && <div>Failed to change your password: {error}</div>}
            <p>
                Choose a password and activate your account.
            </p>
            <form onSubmit={async (evt) => {
                evt.preventDefault();
                await doChangePassword();
            }}>
                <div>
                    <label htmlFor="old_password">Existing Password</label>
                    <input type="password"
                           id='old_password'
                           value={oldPassword}
                           minLength={4}
                           required={true}
                           onChange={evt => setOldPassword(evt.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">New Password</label>
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
                           value={password2}
                           minLength={4}
                           required={true}
                           onChange={evt => setPassword2(evt.target.value)}/>
                </div>
                <button type="submit">Change password</button>
            </form>
        </>
    )
}
import React, {useCallback, useMemo, useState} from "react";
import {UsersClient} from "../clients/UsersClient";

export const SignupForm = () => {

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);

    const doSignUp = useCallback(async () => {
        try {
            await usersClient.registerUser({
                email,
                name
            });
            setError('');
        } catch (e: any) {
            setError(e.message);
        }
    }, [email, name, usersClient]);

    return (
        <>
            {error && <div>Failed to sign up: {error}</div>}
            <form onSubmit={async (evt) => {
                evt.preventDefault();
                await doSignUp();
            }}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                           id='email'
                           value={email}
                           required={true}
                           onChange={evt => setEmail(evt.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                           id='name'
                           minLength={4}
                           required={true}
                           value={name}
                           onChange={evt => setName(evt.target.value)}/>
                </div>
                <button type="submit">Sign up</button>
            </form>
        </>
    )
}
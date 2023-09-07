import React, { useCallback, useMemo, useState } from 'react';
import { UsersClient } from '../clients/UsersClient';
import { removeCurrentSession, setCurrentSession } from '../auth/auth';
import { Alert, Box, Button, Paper, Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);

    const doLogin = useCallback(async () => {
        try {
            setIsSubmitting(true);
            const session = await usersClient.authenticationUser({
                password,
                email,
            });
            if (!session) {
                setError('Invalid credentials');
                return;
            }

            setCurrentSession(session);
            setError('');
            window.location.pathname = '/';
        } catch (e) {
            removeCurrentSession();
            setError((e as Error).message);
        } finally {
            setIsSubmitting(false);
        }
    }, [email, password, usersClient]);

    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                void doLogin();
            }}
        >
            <Paper sx={{ p: 4, width: 400, m: 'auto' }}>
                <Stack direction="column" spacing={2}>
                    {error && <Alert severity="error">Failed to log in: {error}</Alert>}
                    <TextField
                        fullWidth
                        label="E-mail"
                        type="email"
                        required={true}
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        required={true}
                        inputProps={{ minLength: 4 }}
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                    <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
                        Log in
                    </Button>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link to="/signup">Create a new user</Link> or <Link to="/reset-password">Forgot password</Link>
                    </Box>
                </Stack>
            </Paper>
        </form>
    );
};

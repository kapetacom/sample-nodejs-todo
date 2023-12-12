/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, { useCallback, useMemo, useState } from 'react';
import {useAuth, useUsersClient} from '../auth/auth';
import { Alert, Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const usersClient = useUsersClient();
    const auth = useAuth();

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

            auth.setSession(session);
            setError('');
            window.location.pathname = '/';
        } catch (e) {
            auth.setSession(null);
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
            <Paper sx={{ p: 4, width: 400, m: 'auto', mt: '150px' }}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h5">Log in</Typography>
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

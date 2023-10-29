/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, { useCallback, useMemo, useState } from 'react';
import { UsersClient } from '../clients/UsersClient';
import { Alert, Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const SignupForm = () => {
    const [formState, setFormState] = useState<'pending' | 'loading' | 'submitted'>('pending');
    const [message, setMessage] = useState<{
        text: string;
        severity: 'success' | 'error';
    } | null>(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);

    const doSignUp = useCallback(async () => {
        setFormState('loading');
        try {
            await usersClient.registerUser({
                email,
                name,
            });
            setMessage({
                severity: 'success',
                text: 'Check your e-mail for activation link',
            });
            setFormState('submitted');
        } catch (e) {
            setMessage({
                severity: 'error',
                text: (e as Error).message,
            });
            setFormState('pending');
        }
    }, [email, name, usersClient]);

    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                void doSignUp();
            }}
        >
            <Paper sx={{ p: 4, width: 400, m: 'auto', mt: '150px' }}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h5">Sign up</Typography>

                    {message && <Alert severity={message.severity}>{message.text}</Alert>}

                    <TextField
                        fullWidth
                        label="E-mail"
                        type="email"
                        id="email"
                        value={email}
                        required={true}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Name"
                        type="text"
                        id="name"
                        inputProps={{ minLength: 4 }}
                        required={true}
                        value={name}
                        onChange={(evt) => setName(evt.target.value)}
                    />

                    <Button type="submit" color="primary" variant="contained" disabled={formState !== 'pending'}>
                        Sign up
                    </Button>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link to="/login">Back to Log in</Link>
                    </Box>
                </Stack>
            </Paper>
        </form>
    );
};

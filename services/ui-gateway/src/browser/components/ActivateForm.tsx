/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, { useCallback, useMemo, useState } from 'react';
import { UsersClient } from '../clients/UsersClient';
import { Link, useParams } from 'react-router-dom';
import { Alert, Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';

export const ActivateForm = () => {
    const { id } = useParams();
    const [formState, setFormState] = useState<'pending' | 'loading' | 'submitted'>('pending');
    const [message, setMessage] = useState<{
        text: string;
        severity: 'success' | 'error';
    } | null>(null);

    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);

    const doActivate = useCallback(async () => {
        setFormState('loading');
        try {
            if (!id) {
                throw new Error('Invalid activation link');
            }

            await usersClient.activateUser({
                id,
                password,
                password2,
            });
            setFormState('submitted');
            setTimeout(() => {
                location.href = '/login';
            }, 2000);
        } catch (e) {
            setMessage({
                severity: 'error',
                text: `Failed to activate account: ${(e as Error).message}`,
            });
        }
    }, [id, password, password2, usersClient]);

    if (!id) {
        return <Alert severity="error">Invalid activation link</Alert>;
    }
    const buttonText = {
        pending: 'Activate',
        loading: 'Activating...',
        submitted: 'Account activated',
    }[formState];

    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                void doActivate();
            }}
        >
            <Paper sx={{ p: 4, width: 400, m: 'auto', mt: '150px' }}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h5">Activate account</Typography>
                    {message && <Alert severity={message.severity}>{message.text}</Alert>}
                    <p>Choose a password and activate your account.</p>
                    <TextField
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        inputProps={{ minLength: 4 }}
                        required={true}
                        onChange={(evt) => setPassword(evt.target.value)}
                    />

                    <TextField
                        label="Repeat password"
                        type="password"
                        id="password2"
                        value={password2}
                        inputProps={{ minLength: 4 }}
                        required={true}
                        onChange={(evt) => setPassword2(evt.target.value)}
                    />
                    <Button type="submit" color="primary" variant="contained" disabled={formState !== 'pending'}>
                        {buttonText}
                    </Button>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link to="/login">Back to login</Link>
                    </Box>
                </Stack>
            </Paper>
        </form>
    );
};

import React, { useCallback, useMemo, useState } from 'react';
import { UsersClient } from '../clients/UsersClient';
import { Alert, Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const ResetPasswordForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const usersClient = useMemo(() => new UsersClient(), []);

    const doReset = useCallback(async () => {
        try {
            setIsSubmitting(true);
            await usersClient.resetPassword(email);
            setError('');
        } catch (e) {
            setError((e as Error).message);
        } finally {
            setIsSubmitting(false);
        }
    }, [email, usersClient]);

    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                void doReset();
            }}
        >
            <Paper sx={{ p: 4, width: 400, m: 'auto', mt: '150px' }}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h5">Reset password</Typography>
                    {error && <Alert severity="error">Failed to reset: {error}</Alert>}
                    <TextField
                        label="E-mail"
                        type="email"
                        required
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />

                    <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
                        Reset password
                    </Button>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link to="/login">Back to Log in</Link>
                    </Box>
                </Stack>
            </Paper>
        </form>
    );
};

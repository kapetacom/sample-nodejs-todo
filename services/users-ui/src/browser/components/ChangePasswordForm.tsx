import React, { useCallback, useMemo, useState } from 'react';
import { UsersClient } from '../clients/UsersClient';
import { useParams } from 'react-router-dom';
import { getCurrentSession } from '../auth/auth';
import { Alert, Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';

export const ChangePasswordForm = () => {
    const session = getCurrentSession();
    if (!session) {
        return <div>Not logged in</div>;
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
                id: session.userId,
            });
            setError('');
            setOldPassword('');
            setPassword('');
            setPassword2('');
            alert('Password changed!');
        } catch (e) {
            setError((e as Error).message);
        }
    }, [oldPassword, password, password2, usersClient]);

    return (
        <Box sx={{ p: 2, maxWidth: 500 }}>
            <Paper sx={{ p: 4, minHeight: 300 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Change password
                </Typography>

                {error && <Alert severity="error">Failed to change your password: {error}</Alert>}

                <form
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        void doChangePassword();
                    }}
                >
                    <Stack direction="column" spacing={2}>
                        <TextField
                            fullWidth
                            label="Existing Password"
                            type="password"
                            name="old_password"
                            id="old_password"
                            value={oldPassword}
                            inputProps={{ minLength: 4 }}
                            required={true}
                            onChange={(evt) => setOldPassword(evt.target.value)}
                        />
                        <TextField
                            label="New Password"
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            inputProps={{ minLength: 4 }}
                            required={true}
                            onChange={(evt) => setPassword(evt.target.value)}
                        />
                        <TextField
                            label="Repeat password"
                            type="password"
                            name="password2"
                            id="password2"
                            value={password2}
                            inputProps={{ minLength: 4 }}
                            required={true}
                            onChange={(evt) => setPassword2(evt.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Change password
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
};

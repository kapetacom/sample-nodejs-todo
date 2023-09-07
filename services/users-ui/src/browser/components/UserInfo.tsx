import React from 'react';
import { getCurrentSession } from '../auth/auth';
import { Box, FormControl, Input, InputAdornment, InputLabel, Paper, Stack, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export const UserInfo = () => {
    const session = getCurrentSession();
    if (!session) {
        return <div>Not logged in</div>;
    }
    return (
        <Box sx={{ p: 2, maxWidth: 500 }}>
            <Paper sx={{ p: 4, minHeight: 300 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    User Info
                </Typography>

                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input
                        id="name"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        disabled
                        value={session.name}
                    />
                </FormControl>
            </Paper>
        </Box>
    );
};

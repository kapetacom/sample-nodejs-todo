/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Alert, Box, Typography, Button } from '@mui/material';

export const NotLoggedInAlert = () => {
    return (
        <Alert
            severity="error"
            sx={{
                '.MuiAlert-message': {
                    width: '100%',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'flex-start',
                }}
            >
                <Typography variant="body1">You are not logged in</Typography>
                <Typography variant="body2">Please login to see your todo list</Typography>
                <Button variant="outlined" color="inherit" component="a" href="/login" sx={{ textTransform: 'none' }}>
                    Login
                </Button>
            </Box>
        </Alert>
    );
};

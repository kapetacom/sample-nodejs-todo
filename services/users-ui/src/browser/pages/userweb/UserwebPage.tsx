/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { FrameRouter } from '@kapeta/sdk-web-microfrontend-frame';
import { ChangePasswordForm } from '../../components/ChangePasswordForm';
import { UserInfo } from '../../components/UserInfo';

import { Box, List, ListItem, ListItemButton, ListItemText, ListSubheader, Stack } from '@mui/material';

export const UserwebPage = () => {
    return (
        <FrameRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/change-password" element={<ChangePasswordForm />} />
                    <Route path="/" element={<UserInfo />} />
                </Route>
            </Routes>
        </FrameRouter>
    );
};

const Layout = () => {
    const location = useLocation();

    return (
        <Box
            component="main"
            sx={{
                minHeight: '100%',
                width: '100%',
            }}
        >
            <Stack direction="row" sx={{ height: '100%' }}>
                <List
                    sx={{ height: '100%', backgroundColor: '#fafafa', width: '256px', borderRight: '1px solid #ddd' }}
                    subheader={<ListSubheader>Settings</ListSubheader>}
                >
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/" selected={location.pathname === '/'}>
                            <ListItemText>Profile</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            component={Link}
                            to="/change-password"
                            selected={location.pathname === '/change-password'}
                        >
                            <ListItemText>Change password</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Box
                    component={'article'}
                    sx={{
                        flexGrow: 1,
                        backgroundColor: '#fafafa',
                        backgroundImage: 'linear-gradient(225deg, #5596FF 0%, #AC2DEB 100%)',
                        backgroundSize: '100% 300px',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Outlet />
                </Box>
            </Stack>
        </Box>
    );
};

import React from 'react';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';
import { AuthProvider, Logout, RequireAuth, RequireNonAuth, useAuth } from '../../auth/auth';
import { ActivateForm } from '../../components/ActivateForm';
import { SignupForm } from '../../components/SignupForm';
import { ResetPasswordForm } from '../../components/ResetPasswordForm';
import { UserwebFragment } from '../../fragments/UserwebFragment';
import { TodowebFragment } from '../../fragments/TodowebFragment';
import { FrameRouter } from '@kapeta/sdk-web-microfrontend-frame';
import {
    Box,
    CssBaseline,
    List,
    ListItemButton,
    ListItem,
    Stack,
    Drawer,
    Divider,
    CardContent,
    Typography,
    CardActions,
    Card,
    Button,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { KapetaLogo } from '../../components/KapetaLogo';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const location = useLocation();
    const isSelected = (path: string) => {
        return location.pathname === path;
    };
    return (
        <ListItem disablePadding>
            <ListItemButton component={Link} to={to} selected={isSelected(to)}>
                {children}
            </ListItemButton>
        </ListItem>
    );
};

const Layout = () => {
    const drawerWidth = 240;
    const auth = useAuth();
    return (
        <Box
            component="main"
            sx={{
                minHeight: '100%',
                width: '100%',
            }}
        >
            <Stack direction={'row'} sx={{ minHeight: '100%' }}>
                <Box sx={{ width: drawerWidth }}>
                    <Drawer
                        variant="permanent"
                        sx={{
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <Box sx={{ p: 2, textAlign: 'center' }}>
                            <KapetaLogo width={drawerWidth} height={30} />
                            <Typography variant="h6">Todo App</Typography>
                        </Box>

                        <List>
                            {auth.isAuthenticated() && (
                                <>
                                    <MenuLink to="/">
                                        <ListItemIcon>
                                            <CheckCircleOutlineRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText>Todos</ListItemText>
                                    </MenuLink>
                                    <MenuLink to="/user">
                                        <ListItemIcon>
                                            <SettingsIcon />
                                        </ListItemIcon>
                                        <ListItemText>Settings</ListItemText>
                                    </MenuLink>
                                    <MenuLink to="/logout">
                                        <ListItemIcon>
                                            <LogoutIcon />
                                        </ListItemIcon>
                                        <ListItemText>Log out</ListItemText>
                                    </MenuLink>
                                    <Divider />
                                </>
                            )}
                        </List>

                        {/* Explainer for the app */}
                        <Card sx={{ borderRadius: 0 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Sample Todo App
                                </Typography>

                                <Typography variant="body2">
                                    Welcome to the sample todo app. This single page application (SPA) uses a
                                    microfrontend architecture.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href="https://github.com/kapetacom/sample-nodejs-todo">
                                    Learn more
                                </Button>
                            </CardActions>
                        </Card>
                    </Drawer>
                </Box>

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

export const WebPage = () => {
    return (
        <AuthProvider>
            <CssBaseline />
            <FrameRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route
                            path="/login"
                            element={
                                <RequireNonAuth>
                                    <LoginForm />
                                </RequireNonAuth>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <RequireNonAuth>
                                    <SignupForm />
                                </RequireNonAuth>
                            }
                        />
                        <Route
                            path="/reset-password"
                            element={
                                <RequireNonAuth>
                                    <ResetPasswordForm />
                                </RequireNonAuth>
                            }
                        />
                        <Route
                            path="/activation/:id"
                            element={
                                <RequireNonAuth>
                                    <ActivateForm />
                                </RequireNonAuth>
                            }
                        />
                        <Route path="/logout" element={<Logout />} />
                        <Route
                            path="/user/*"
                            element={
                                <RequireAuth>
                                    <UserwebFragment topPath="/user" />
                                </RequireAuth>
                            }
                        />

                        <Route
                            path="/*"
                            element={
                                <RequireAuth>
                                    <TodowebFragment topPath="/" />
                                </RequireAuth>
                            }
                        />
                    </Route>
                </Routes>
            </FrameRouter>
        </AuthProvider>
    );
};

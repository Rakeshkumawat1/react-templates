import React from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar, Typography, IconButton, Box, Avatar, Badge, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

// Icons
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NavSettingIcon from './components/NavSettingIcon';
import UsersListIcon from './components/UsersListIcon';

// Define drawer width length.
const drawerWidth = 220;

// Nav bar style handler
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, mode }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: mode === "light" ? 'rgba(255, 255, 255, 1.8)' : 'background.default',
    backgroundImage: 'none',
    boxSizing: 'border-box',
    flexShrink: 0,
    color: 'inherit',
    backdropFilter: 'blur(6px)',
    // boxShadow: 'none',
    ...(open ? {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    } :
        {
            left: '89px',
            width: `calc(100% - 89px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        })
}));

export default function NavBar({ open }) {
    const theme = useTheme()

    return (
        <AppBar position="fixed" open={open} mode={theme.palette.mode}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{
                        ml: '15px',
                        color: '#757575'
                    }}
                >
                    <SearchIcon />
                </IconButton>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ml: '5px',
                    backgroundColor: 'rgba(145, 158, 171, 0.16)',
                    p: '0 10px 0 10px',
                    borderRadius: '20px',
                    color: '#757575'
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        disableElevation
                        disableRipple
                        sx={{
                            backgroundColor: 'transparent',
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        <KeyboardCommandKeyIcon sx={{
                            height: '14px',
                            width: '14px'
                        }} />
                    </IconButton>
                    <Typography noWrap component="div" sx={{
                        ml: '-5px',
                        fontSize: '14px',
                        fontWeight: 500
                    }}>
                        K
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexGrow: 1,
                    mr: '10px',
                    gap: '15px'
                }}>
                    {/* Settings icon */}
                    <NavSettingIcon />

                    {/* Users list section */}
                    <UsersListIcon />

                    {/* Notification section */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Badge badgeContent={4} color="primary" >
                            <NotificationsActiveIcon color="action" />
                        </Badge>
                    </Box>


                    {/* Profile section */}
                    <Avatar alt="Yemy Sharp" src="/static/images/avatar/1.jpg" sx={{
                        width: '35px',
                        height: '35px',
                    }} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

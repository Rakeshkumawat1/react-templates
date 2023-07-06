import React from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar, Typography, IconButton } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

// Icons
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SearchIcon from '@mui/icons-material/Search';

// Define drawer width length.
const drawerWidth = 220;

// Nav bar style handler
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgba(255, 255, 255, 1.8)',// : 'transparent',//'rgba(255, 255, 255, 0.8)',
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
        left: '81px',
        width: `calc(100% - 81px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        } ),
    })
}));
export default function NavBar({ open }) {
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    // onClick={handleDrawerOpen}
                    edge="start"
                >
                    <SearchIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    // onClick={handleDrawerOpen}
                    edge="start"
                // sx={{
                //   marginRight: 5,
                //   ...(open && { display: 'none' }),
                // }}
                >
                    <KeyboardCommandKeyIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    K
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

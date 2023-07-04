import React, { useState } from 'react';
import {
    AppBar, Box, Divider, Drawer, IconButton,
    List, ListItem, ListItemButton,
    ListItemText, Toolbar, Typography, Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { imgUrl } from '../../config';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Docs'];

export default function Navbar(props) {
    const { window, colorChange } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar component="nav" sx={{
                display: 'flex',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                backgroundColor: colorChange ? 'rgba(255, 255, 255, 0.8)' : 'transparent',//'rgba(255, 255, 255, 0.8)',
                backgroundImage: 'none',
                boxSizing: 'border-box',
                flexShrink: 0,
                color: 'inherit',
                backdropFilter: colorChange ? 'blur(6px)' : 'none', //'blur(6px)',
                boxShadow: 'none'
            }}>
                <Toolbar sx={{ m: '0 120px 0 120px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, width: '10%' }}>
                        <img src={`${imgUrl?.navLogo}`} alt='Logo' style={{ width: '7%', height: '5%' }} />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, flexDirection: 'row' }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: 'rgb(33, 43, 54)',
                                    transition: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                    textTransform: 'none',
                                    userSelect: 'none',
                                    cursor: 'pointer',
                                    backgroundColor: 'transparent',
                                    p: '0 30px 0 0',
                                    '&:hover': {
                                        opacity: 0.48,
                                        backgroundColor: 'transparent'
                                    },
                                }}
                                disableElevation
                                disableRipple
                            >
                                {item}
                            </Button>
                        ))}
                        <Button
                            variant='outlined'
                            size='small'
                            sx={{
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                userSelect: 'none',
                                appearance: 'none',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                border: '1px solid rgba(145, 158, 171, 0.32)',
                                color: 'inherit',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    border: '1px solid rgb(33, 43, 54)'
                                }
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

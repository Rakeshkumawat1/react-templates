import React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { imgUrl } from '../../config';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

// Define drawer width length.
const drawerWidth = 220;

// Drawer open handler css.
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRight: '1px dashed rgba(0, 0, 0, 0.12)',
});

// Drawer close handler css.
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
  borderRight: '1px dashed rgba(0, 0, 0, 0.12)',
});

// Drawer header style hadler
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 2.5),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


// Drawer style handler
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function BarSection({ open }) {

  return (
    <Drawer variant="permanent" open={open}>

      {/* Drawer header section. */}
      <DrawerHeader>
        <img src={imgUrl?.navLogo} alt="" style={{ width: '40px', height: '40px' }} />
      </DrawerHeader>

      {/* Side bar list section. */}
      <List>
        {['Home', 'Cards', 'Users', 'Analytics'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                flexDirection: open ? 'row' : 'column',
                px: 3.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <HomeIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: open ? '1rem' : '12px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

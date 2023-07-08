import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, CssBaseline, IconButton } from '@mui/material';
import { imgUrl } from '../../config';
import SideBarSection from '../../components/Home/BarSection';
import NavBar from '../../components/Home/NavBar';

// Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // For open and Close drawer.
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{
      display: 'flex',
      background: `linear-gradient(rgba(255, 255, 255, 1.9), rgba(255, 255, 255, 0.9)) center center / cover no-repeat, url(${imgUrl?.bgOverly})`,
      height: '100vh'
    }}>
      <CssBaseline />

      {/* Side bar open and close icon. */}
      <IconButton onClick={() => handleDrawer()} sx={{
        position: 'absolute',
        top: '18px',
        left: open ? '205px' : '65px',
        zIndex: 1999,
        border: '1px dashed rgba(0, 0, 0, 0.12)',
        width: '30px',
        height: '30px',
        backgroundColor: theme.palette.mode === 'light' ? '#f5f6f7' : '#757575',
        color: theme.palette.mode === 'light' ? "" : 'background.default',
        '&:hover': {
          backgroundColor: theme.palette.mode === 'light' ? '#f5f6f7' : '#757575',
        }
      }}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
      {/* Nav bar section. */}
      <NavBar open={open} />

      {/* Side bar section */}
      <SideBarSection open={open} />

      {/* Main body section. */}
      <Box component="main" sx={{
        flexGrow: 1,
        p: 3,
        // mt: 6,
        backgroundColor: 'background.default'
      }}>
        {/* <DrawerHeader /> */}
      </Box>
    </Box>
  )
}

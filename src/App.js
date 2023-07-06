import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Routes, Route } from "react-router-dom";

//All pages
import LandingPage from './pages/landingPage';
import Home from './pages/Home';
import Login from './pages/Auth/Login';

import { ColorModeContext } from './context/ThemeContext';

function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Home/>} />
          {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
        </Routes>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

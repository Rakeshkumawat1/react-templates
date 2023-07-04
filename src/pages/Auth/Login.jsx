import { Box } from '@mui/material';
import React from 'react'
import FormSection from '../../components/Auth/Login.jsx/FormSection';
import WelcomeImageSection from '../../components/Auth/Login.jsx/WelcomeImageSection';


export default function Login() {

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            height: '100vh'
        }}>
            <WelcomeImageSection />

            <FormSection />
        </Box>
    )
}

import { Box } from '@mui/material';
import React from 'react'
import FormSection from '../../components/Auth/Login.jsx/FormSection';


export default function Login() {

    return (
        <>
            <Box sx={{
                width: '100%',
                display: 'flex',
                height: '100vh'
            }}>

                <Box sx={{
                    width: 'calc(100% / 1.1)',
                    background: '#454545'
                }}>
                </Box>
               
               <FormSection />
            </Box>

        </>
    )
}

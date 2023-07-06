import { Box, Typography } from '@mui/material'
import React from 'react';
import { imgUrl } from '../../config';

export default function Footer() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <Box sx={{/*  width: '10%' */ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={`${imgUrl?.navLogo}`} alt='Logo' style={{ width: '5%', height: '4%' }} />
                </Box>
                <Typography variant='h6' component='h6' sx={{
                    fontSize: '12px',
                    color: '#757575'
                }}>
                    © All rights reserved
                </Typography>
                <Typography variant='h6' component='h6' sx={{
                    fontSize: '12px',
                    color: '#757575'
                }}>
                    Made by Rakesh Kumawat
                </Typography>
            </Box>

        </>
    )
}

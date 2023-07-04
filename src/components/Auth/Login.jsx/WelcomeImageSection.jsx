import React from 'react';
import { Box, Typography } from '@mui/material';
import { imgUrl } from '../../../config'

export default function WelcomeImageSection() {
    return (
        <Box sx={{
            width: 'calc(100% / 1.5)',
            background: '#F4F6F8',
            display: 'flex',
            flexDirection: 'column',
            p: '80px 70px 0 70px',
            gap: '20px',
        }}>

            <Box sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center'
            }}>
                <img src={`${imgUrl?.navLogo}`} alt='Logo' style={{ width: '8%', height: '60%' }} />
                <Typography sx={{
                    fontSize: '24px',
                    lineHeight: '25px',
                    fontWeight: 700
                }}>
                    Enjoy the day
                </Typography>
            </Box>
            <Box sx={{ height: 'calc(100%/1.7)', pt: '20px', }}>
                <img src={imgUrl?.loginSideImg} alt="look" style={{ width: '100%', height: '90%', borderRadius: '10px', mixBlendMode: 'multiply' }} />
            </Box>
            <Typography sx={{
                fontSize: '28px',
                lineHeight: '25px',
                fontWeight: 800,
                pt: '30px'
            }} >
                Welcome back!
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography sx={{
                    fontSize: '16px',
                    color: '#757575',
                    fontWeight: 500,
                }} >
                    Grow your business faster and batter.
                </Typography>
                <Typography sx={{
                    fontSize: '16px',
                    color: '#757575',
                    fontWeight: 500,
                }} >
                    Grow your business faster and batter.
                </Typography>
            </Box>

        </Box>
    )
}

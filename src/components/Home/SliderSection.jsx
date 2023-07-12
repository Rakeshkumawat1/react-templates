import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function SliderSection() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            minHeight: '35vh',
            gap: '15px',
            p: '5px'
        }}>
            <Box sx={{
                width: 'calc(100% / 1.5)',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: '16px',
                backgroundColor: 'activeTheme.cardBackground',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                boxShadow:'rgba(100, 100, 111, 0.1) 0px 5px 19px 0px',
            }}>
                <Box sx={{
                    width: 'calc(100% / 1.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '10px',
                    p: '35px'
                }}>
                    <Typography sx={{
                        fontSize: '26px',
                        fontWeight: 700,
                        color: 'text.primary',
                        opacity: 0.8
                    }}>
                        Welcome back 👋
                    </Typography>
                    <Typography sx={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: 'text.primary',
                        opacity: 0.8
                    }}>
                        Rakesh Kumawat
                    </Typography>
                    <Typography sx={{
                        fontSize: '16px',
                        fontWeight: 400,
                        color: 'text.secondary',
                        p: '10px 0 20px 0'
                    }}>
                        Welcome to our website! We're thrilled to have you here, We're here to make your online experience exceptional.
                    </Typography>

                    <Button sx={{
                        textTransform: 'none',
                        backgroundColor: 'activeTheme.color',
                        color: 'background.default',
                        width: '20%',
                        borderRadius: '15px',
                        '&:hover': {
                            backgroundColor: 'activeTheme.color'
                        }
                    }}>
                        Try now
                    </Button>
                </Box>
                <Box>
                    Image
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: '#fff',
                width: '60vh',
                borderRadius: '10px',
            }}>
                
            </Box>
        </Box>

    )
}

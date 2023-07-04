import React from 'react';
import {
    Box, Typography, Divider, IconButton, Button
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function LicenceCard(params) {
    const { featuresListBasics, title } = params;
    return (
        <Box sx={{
            width: 'calc(100% / 3)',
            p: '30px',
            gap: '15px',
            display: 'flex',
            flexDirection: 'column',
            borderRight: 'dashed #e3dfde'

        }}>
            <Typography variant='h6' component={'h6'} sx={{
                color: 'rgb(99, 115, 129)',
                fontSize: '15px',
                lineHeight: '20px',
                fontWeight: 700,
                mt: '30px'
            }}>
                LICENSE
            </Typography>
            <Typography variant='h5' component={'h5'} className={"content"} sx={{
                color: '#454545',
                fontSize: '34px',
                lineHeight: '20px',
                fontWeight: 100,
                display: 'flex',
                mb: 3
            }}>
                <h5>{title}</h5>
                <h5>{title}</h5>
            </Typography>
            <Typography variant='h6' component={'h6'} sx={{
                color: '#4389fa',
                fontSize: '18px',
                lineHeight: '20px',
                fontWeight: 700,
                m: '25px 0 10px 0'
            }}>
                JS
            </Typography>

            {featuresListBasics.map(({ title, available }, i) => (
                <Box key={title}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        {available ? <IconButton disableFocusRipple disableRipple sx={{
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}>
                            <CheckIcon sx={{
                                width: '16px',
                                color: '#0c0d0d'
                            }} />
                        </IconButton>
                            :
                            <IconButton disableFocusRipple disableRipple sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent'
                                }
                            }}>
                                <CloseIcon sx={{
                                    width: '16px',
                                    color: '#0c0d0d'
                                }} />
                            </IconButton>}
                        <Typography sx={{
                            fontSize: '14px',
                            lineHeight: '16px',
                            fontWeight: 400,
                            color: available ? "#011212" : "#757575"
                        }}>
                            {title}
                        </Typography>
                    </Box>
                    {i === 2 && <Divider />}
                </Box>
            ))}

            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <Button endIcon={<ArrowForwardIosIcon  sx={{ height: '16px'}}/>} sx={{
                    textTransform: 'none'
                }}>Learn more</Button>
            </Box>
        </Box >
    )
}

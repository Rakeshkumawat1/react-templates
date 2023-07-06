import React from 'react';
import {
    Button, Box, Typography, InputAdornment, TextField, IconButton, Divider
} from '@mui/material';
import { Visibility, /* VisibilityOff */ } from '@mui/icons-material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InfoIcon from '@mui/icons-material/Info';

export default function FormSection() {
    return (
        <Box sx={{
            width: '100%',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // p: '100px',
                flexDirection: 'column',
                gap: '10px'
            }}>

                <Typography sx={{
                    fontSize: '28px',
                    lineHeight: '25px',
                    fontWeight: 800
                }} >
                    Welcome back!
                </Typography>
                <Typography sx={{
                    fontSize: '16px',
                    color: '#757575',
                    fontWeight: 500,
                    pt: '10px'
                }} >
                    Start managing your business faster and batter.
                </Typography>

                <Typography sx={{
                    backgroundColor: 'rgb(202, 253, 245)',
                    p: '20px 10px 20px 10px',
                    display: 'inline-flex', 
                    gap: '10px',
                    borderRadius: '15px',
                    mt: '10px'
                }}>
                    <InfoIcon sx={{color: '#00B8D9'}}/>
                    Use email : enjoy@you.com / password : enjoy
                </Typography>

                <TextField
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '40ch', bgcolor: '#F4F6F8', borderRadius: '15px' }}
                    placeholder={"you@example.com"}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><IconButton sx={{
                            color: '#00B8D9',
                            bgcolor: '#fff',
                            borderRadius: '10px',
                            '&:hover': {
                                background: '#fff'
                            }
                        }}>
                            <ContactMailIcon />
                        </IconButton>
                        </InputAdornment>,
                        sx: {
                            "& fieldset": { border: 'none', borderRadius: "15px", },
                        }
                    }}
                />
                <TextField
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '40ch', bgcolor: '#F4F6F8', borderRadius: '15px' }}
                    placeholder={"password"}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><IconButton sx={{
                            color: '#00B8D9',
                            bgcolor: '#fff',
                            borderRadius: '10px',
                            '&:hover': {
                                background: '#fff'
                            }
                        }}>
                            <LockIcon />
                        </IconButton>
                        </InputAdornment>,
                        endAdornment: <InputAdornment position="start"><IconButton sx={{
                            color: '#00B8D9',
                            bgcolor: '#fff',
                            borderRadius: '10px',
                            '&:hover': {
                                background: '#fff'
                            }
                        }}>
                            <Visibility />
                        </IconButton>
                        </InputAdornment>,
                        sx: {
                            "& fieldset": { border: 'none', borderRadius: "15px", },
                        }
                    }}
                />

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    pb: '10px',
                    width: '95%',
                }}>
                    <Typography sx={{
                        color: '#006C9C'
                    }}>
                        Forgot password?
                    </Typography>
                </Box>

                <Button variant='contained' color='primary' size='large' sx={{
                    width: '95%',
                    textTransform: 'none',
                }}>
                    Login
                </Button>

                <Box sx={{
                    display: 'flex',
                    color: "#757575",
                    p: '20px',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <Divider sx={{
                        color: "#757575",
                        backgroundColor: '#fff',
                        width: '35%'
                    }} />
                    <Typography>
                        or
                    </Typography>
                    <Divider sx={{
                        color: "#757575",
                        backgroundColor: '#fff',
                        width: '35%'
                    }} />
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px'
                }}>
                    <Button variant='contained' color='primary' size='medium' sx={{
                        textTransform: 'none',
                    }} startIcon={<GoogleIcon />}>
                        Google
                    </Button>
                    <Button variant='contained' color='primary' size='medium' sx={{
                        textTransform: 'none',
                    }} startIcon={<FacebookIcon />}>
                        Facebook
                    </Button>
                </Box>
                <Box sx={{
                    display: 'flex',
                    p: '30px 0 0 0',
                    flexDirection: 'row'
                }}>
                    <Typography sx={{
                        color: '#757575',
                    }}>
                        Don't you have an account? <Typography variant="inherit" component={"span"} sx={{
                            color: '#006C9C',
                        }}> Sign Up</Typography>
                    </Typography>
                </Box>

                <Typography sx={{
                    position: 'absolute',
                    bottom: 3,
                    color: '#757575',
                }}>
                    &copy; 2023 All rights reserved
                </Typography>
            </Box>

        </Box>

    )
}

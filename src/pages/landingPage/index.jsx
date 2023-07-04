import React, { useState, useEffect } from 'react';
import {
    Box, Button, CssBaseline, Toolbar, Typography, Rating,
} from '@mui/material';
import { imgUrl } from '../../config';
import Navbar from '../../components/Navbar';

//Icons
import InsightsIcon from '@mui/icons-material/Insights';
import LaunchIcon from '@mui/icons-material/Launch';
import Footer from '../../components/Footer';
import BasicCard from '../../layouts/Cards/BasicCard';
import LicenceSection from '../../components/LandingPage/LicenceSection';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

let colorHandler = false;
export default function LandingPage() {
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 50 && !colorHandler) {
            colorHandler = true
            setColorchange(true);
        } else if (window.scrollY < 5 && colorHandler) {
            colorHandler = false
            setColorchange(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', changeNavbarColor);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', changeNavbarColor);
            }
        };
    }, []);

    // useEffect(() => {
    //     window.close()
    // }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)) center center / cover no-repeat, url(${imgUrl?.bgOverly})`
        }}>
            <CssBaseline />
            <Navbar
                colorChange={colorChange}
            />
            <Box component="main" sx={{ p: 3, /* overflowY: "scroll", */ }} >
                <Toolbar />
                <Box sx={{
                    p: '0 120px 0 120px',
                    width: '100%',
                    display: 'flex',
                    height: '75vh'
                }}>
                    <Box sx={{
                        width: '50%',
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        gap: '30px',
                        justifyContent: 'center'
                    }}>
                        <Typography variant='h2' component="h2" sx={{
                            color: 'rgb(30, 32, 34)',
                            fontWeight: 600,
                            justifyContent: 'flex-start'
                        }}>
                            Turn your ideas <br />
                            into {" "}
                            <Typography variant='inherit' component='span' sx={{
                                background: 'linear-gradient(transparent 82%, rgba(249, 185, 52, 0.3) 0%)',
                                color: 'rgb(55, 125, 255)'
                            }}>
                                success.
                            </Typography>
                        </Typography>

                        <Typography variant='h6' component="h6" sx={{
                            color: '#637381',
                            fontWeight: 400,
                            fontSize: '1rem'
                        }}>
                            The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px'
                        }}>
                            <Rating name="full-rating" defaultValue={4.5} precision={2.5} />
                            <Typography variant='h6' component='h6' sx={{
                                fontWeight: 600,
                                fontSize: '16px',
                                color: 'rgb(33, 43, 54)'
                            }}>
                                4.99/5
                                <Typography variant='inherit' component='span' sx={{
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    color: 'rgb(99, 115, 129)'
                                }}>
                                    (10M+ reviews)
                                </Typography>
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <Button startIcon={<InsightsIcon />} size='medium' sx={{
                                textTransform: 'none',
                                backgroundColor: 'rgb(33, 43, 54)',
                                color: 'rgb(255, 255, 255)',
                                borderRadius: '10px',
                                '&:hover': {
                                    backgroundColor: 'rgb(69, 79, 91)'
                                }
                            }}>
                                Live Preview
                            </Button>
                            <Button startIcon={<LaunchIcon />} size='medium' sx={{
                                textTransform: 'none',
                                backgroundColor: 'transparent',
                                color: 'inherit',
                                border: '1px solid rgb(33, 43, 54)',
                                borderRadius: '10px',
                                '&:hover': {
                                    backgroundColor: 'rgba(33, 43, 54, 0.08)',
                                    boxShadow: '0px 0px 0px 0.5px'
                                }
                            }}>
                                Get code for free
                            </Button>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '50%',
                            gap: '10px'
                        }}>
                            <Typography variant='h6' component='h6' sx={{
                                fontSize: '12px',
                                fontWeight: 700,
                                color: '#757575'
                            }}>
                                AVAILABLE FOR
                            </Typography>
                            <Typography variant='h6' component='h6' sx={{
                                fontSize: '18px',
                                fontWeight: 800,
                                color: '#454545'
                            }}>
                                React JS (MUI)
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '50%',
                        // display: 'flex',
                        m: '0 -10px 0 0'
                    }}>
                        <Box sx={{
                            borderRadius: '20px',
                            border: '8px solid #ebe7e6',
                            objectFit: 'contain',
                            transform: 'rotate(10deg)',
                        }}>
                            <img src={imgUrl?.dashboardLook} alt='landing page dashboard' width='100%' height='100%' style={{
                                objectFit: 'contain',
                                borderRadius: '10px'
                            }} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    // height: '60vh',
                    p: '0 120px 20px 120px',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <BasicCard key={1} url={imgUrl?.cardMain1} />
                    <BasicCard key={2} url={imgUrl?.cardMain1} />
                    <BasicCard key={3} url={imgUrl?.cardMain1} />
                </Box>

                <Box sx={{
                    // height: '60vh',
                    p: '80px 120px 80px 120px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography variant='h6'>
                        Still have questions?
                    </Typography>
                    <Typography variant='body2' sx={{
                        color: 'rgb(99, 115, 129)'
                    }}>
                        Please describe your case to receive the most accurate advice.
                    </Typography>
                    <Button size='medium' sx={{
                        textTransform: 'none',
                        backgroundColor: 'rgb(33, 43, 54)',
                        color: 'rgb(255, 255, 255)',
                        borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: 'rgb(69, 79, 91)'
                        }
                    }}>
                        Contact
                    </Button>
                </Box>

                {/* Licence cards section */}
                <LicenceSection />

                <Box sx={{
                    p: '0px 120px 0px 120px',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: '100px 0 100px 0'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '60px',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '50%',
                        height: '100%'
                    }}>

                        <Typography variant='h6' sx={{
                            color: 'rgb(99, 115, 129)'
                        }}>
                            LOOKING FOR A
                        </Typography>

                        <Typography variant='h2' sx={{
                            fontWeight: 800,
                            lineHeight: '25px',
                            fontSize: '50px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            Landing Page Template?
                        </Typography>
                        <Button size='medium' sx={{
                            textTransform: 'none',
                            backgroundColor: 'rgb(33, 43, 54)',
                            color: 'rgb(255, 255, 255)',
                            borderRadius: '10px',
                            '&:hover': {
                                backgroundColor: 'rgb(69, 79, 91)'
                            }
                        }}>
                            Landing page
                        </Button>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        width: 'calc(100% / 2)'
                    }}>
                        <img src={imgUrl?.landing2} alt='Template' width={"100%"} height={"100%"} />
                    </Box>

                </Box>


                <Box sx={{
                    // height: '70vh',
                    p: '0 120px 0 120px',
                    // display: 'flex',
                    // flexDirection: 'row',
                    // gap: '10px',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // bgcolor: '#fff',
                    // borderRadius: '20px',
                    // boxShadow: 'rgba(0, 0, 0, 0.2) 0px 19px 38px, rgba(0, 0, 0, 0.12) 0px 5px 7px',
                    mb: '80px'
                }} >
                    <Box sx={{
                        // height: '70vh',
                        // p: '0 120px 0 120px',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: '#fff',
                        borderRadius: '20px',
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 19px 38px, rgba(0, 0, 0, 0.12) 0px 5px 7px',
                        // mb: '80px'
                    }} >

                        <Box sx={{
                            display: 'flex',
                            width: 'calc(100% / 3)',
                            justifyContent: 'flex-start',
                        }}>
                            <img src={imgUrl?.rocket} alt='Rocket' width={'100%'} height={'100%'} />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 'calc(100% / 2)',
                            justifyContent: 'flex-start',
                            gap: '30px'
                        }}>
                            <Typography variant='h3' className='forwordTextAnimation' sx={{
                                fontWeight: 900,
                                lineHeight: '60px',
                                fontFamily: "Montserrat Medium",
                                transform: 'scale(0.94)',
                                animation: 'scale 8s forwards cubic- bezier(0.5, 1, 0.89, 1)',
                                gap: '10px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                "@keyframes scale": {
                                    "100%": {
                                        transform: "scale(1)"
                                    }
                                }
                            }}>
                                <span>Get</span>
                                <span>started</span>
                                <span>with</span>
                                <span>Minimal</span>
                                <span>kit</span>
                                <span>today.</span>
                            </Typography>

                            <Button variant='outlined' endIcon={<OpenInNewIcon />} sx={{
                                width: '45%',
                                borderRadius: '20px',
                                textTransform: 'none'
                            }}>
                                Get The code for free
                            </Button>
                        </Box>
                    </Box>

                </Box>
                <Footer />
            </Box>

        </Box >
    )
}

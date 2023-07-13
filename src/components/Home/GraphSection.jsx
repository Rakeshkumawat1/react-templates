import { Box, Divider, IconButton, Typography } from '@mui/material';
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


export default function GraphSection() {
    const data = [
        { label: 'Window', value: 100 },
        { label: 'Mac', value: 100 },
        { label: 'Mobile', value: 300 },
        { label: 'IOS', value: 80 },
    ];
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            minHeight: '65vh',
            gap: '15px',
            p: '5px',
        }}>
            <Box sx={{
                width: 'calc(100% / 2.4)',
                borderRadius: '16px',
                backgroundColor: 'rgb(255, 255, 255)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: '62vh'
            }}>
                <Box sx={{
                    p: '25px 20px 20px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    <Typography sx={{
                        color: 'text.primary',
                        fontSize: '22px',
                        fontWeight: 600
                    }}>
                        Total Downloads
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>

                        <PieChart
                            series={[
                                {
                                    innerRadius: 120,
                                    outerRadius: 133,
                                    data: data,
                                },
                            ]}
                            width={300}
                            height={300}
                            legend={{ hidden: true }}
                        />
                    </Box>

                </Box>

                <Divider />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '30px'
                }}>
                    <Typography sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px'
                    }}>
                        <IconButton sx={{ background: '#757575'}}/>
                        Window
                    </Typography>
                    <Typography sx={{
                        color: 'text.secondary',
                        fontWeight: 500
                    }}>
                        Mac
                    </Typography>
                    <Typography sx={{
                        color: 'text.secondary',
                        fontWeight: 500
                    }}>
                        Mobile
                    </Typography>
                    <Typography sx={{
                        color: 'text.secondary',
                        fontWeight: 500
                    }}>
                        IOS
                    </Typography>

                </Box>

            </Box>

            <Box sx={{
                display: 'flex',
                width: 'calc(100% / 1.6)',
                borderRadius: '16px',
                backgroundColor: 'rgb(255, 255, 255)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                flexDirection: 'column',
                gap: '20px',
            }}>

            </Box>

        </Box>
    )
}

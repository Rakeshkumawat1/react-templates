import React from 'react';
import { Box, IconButton, Typography, } from '@mui/material';
import EjectIcon from '@mui/icons-material/Eject';
import { LineChart } from '@mui/x-charts/LineChart';

export default function NormalTextCards({ tilte, subTitle, counts }) {
    const sizing = {
        margin: { right: 2, left: 0, top: 0, bottom: 0 },
        width: 120,
        height: 50,
        legend: { hidden: true },
    };
    return (
        <Box sx={{
            width: 'calc(100% / 3)',
            borderRadius: '16px',
            backgroundColor: 'rgb(255, 255, 255)',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            p: '30px 10px 10px 26px'
        }}>

            <Typography sx={{
                fontSize: '18px',
                fontWeight: 500,
                color: 'text.secondary'
            }}>
                {tilte}
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <IconButton sx={{ color: 'success.light' }}><EjectIcon /></IconButton>
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: 600
                    }}>
                        {subTitle}
                    </Typography>
                </Box>
                <Box sx={{
                    marginRight: '20px'
                }}>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        {...sizing}
                    />
                </Box>

            </Box>
            <Typography sx={{
                fontSize: '32px',
                fontWeight: 800
            }}>
                {counts}
            </Typography>
        </Box>
    )
}

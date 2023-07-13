import React from 'react';
import { Box, } from '@mui/material';
import NormalTextCards from '../../layouts/Cards/NormalTextCards';

export default function CardsSection() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            minHeight: '25vh',
            gap: '15px',
            p: '5px',
        }}>
            <NormalTextCards tilte={"Total Use"} subTitle={"+ 30.9%"} counts={"36,569"}/>
            <NormalTextCards tilte={"Current Download"} subTitle={"+ 56.6%"} counts={"1,36,569"}/>
            <NormalTextCards tilte={"Total Installed"} subTitle={"+ 46.1%"} counts={"1,06,569"}/>

        </Box>
    )
}

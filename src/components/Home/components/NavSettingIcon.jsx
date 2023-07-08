import React, { useState } from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import DialogModal from '../../../layouts/Dialog';

// Icon
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ContrastIcon from '@mui/icons-material/Contrast';
import TonalityOutlinedIcon from '@mui/icons-material/TonalityOutlined';

export default function NavSettingIcon() {
    const [openSettings, setOpenSettings] = useState(false);

    // Funtion for handle setting dialog open and close.
    const handleOpenSettings = () => {
        setOpenSettings(!openSettings);
    }

    const content = <Box sx={{
        display: 'flex',
        gap: '30px',
        flexDirection: 'column'
    }}>
        {/* Mode section */}
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}>
            <Typography sx={{
                color: '#757575',
                fontWeight: 500
            }}>
                Mode
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px'
            }}>
                <IconButton sx={{
                    backgroundColor: '#fff',
                    width: '120px',
                    height: '70px',
                    borderRadius: '10px'
                }}>
                    <LightModeIcon />
                </IconButton>
                <IconButton sx={{
                    backgroundColor: '#fff',
                    width: '120px',
                    height: '70px',
                    borderRadius: '10px'
                }}>
                    <Brightness4Icon />
                </IconButton>
            </Box>
        </Box>

        {/* Presets section */}
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}>
            <Typography sx={{
                color: '#757575',
                fontWeight: 500
            }}>
                Presets
            </Typography>
            <Box sx={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
            }}>
                {Array(6).fill().map(() => (
                    <IconButton sx={{
                        backgroundColor: '#fff',
                        width: '76px',
                        height: '70px',
                        borderRadius: '10px'
                    }}>
                        <FiberManualRecordIcon />
                    </IconButton>
                ))}
            </Box>
        </Box>

        {/* Contrast section */}
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}>
            <Typography sx={{
                color: '#757575',
                fontWeight: 500
            }}>
                Contrast
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px'
            }}>
                <IconButton sx={{
                    backgroundColor: '#fff',
                    width: '120px',
                    height: '70px',
                    borderRadius: '10px'
                }}>
                    <TonalityOutlinedIcon />
                </IconButton>
                <IconButton sx={{
                    backgroundColor: '#fff',
                    width: '120px',
                    height: '70px',
                    borderRadius: '10px'
                }}>
                    <ContrastIcon />
                </IconButton>
            </Box>
        </Box>
    </Box >

    return (
        <>
            <IconButton onClick={handleOpenSettings}>
                <SettingsIcon />
            </IconButton>

            <DialogModal
                open={openSettings}
                handleClose={handleOpenSettings}
                title={"Settings"}
                content={content}
                transition
                dialogRootSx={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    m: 0,
                    width: "300px",
                    boxShadow: 'none',
                    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
                }}
                fullScreen
                dividers
                hideBackdrop
            />
        </>

    )
}

import React, { useState } from 'react';
import { IconButton, MenuItem, Box, Typography, Avatar } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CustomMenu from '../../../layouts/Menu';

export default function UsersListIcon() {
    const [anchorEl, setAnchorEl] = useState(null);
    const content =
        <Box sx={{
            width: '300px',

        }}>
            <Box sx={{
                p: '10px'
            }}>
                <Typography sx={{
                    color: 'text.secondary',
                    fontSize: '20px',
                    fontWeight: 500
                }}>
                    Contacts  <Typography sx={{
                        color: 'text.secondary',
                        fontSize: '16px',
                        fontWeight: 400
                    }} component={"span"}>
                        (15)
                    </Typography>
                </Typography>
            </Box>
            <Box sx={{
                p: '5px',
                height: '325px',
                overflow: 'hidden',
                overflowY: 'scroll'
            }}>
                {Array(15).fill().map((_, i) => (
                    <MenuItem key={i} sx={{ borderRadius: '10px', p: '10px', gap: '10px' }}>
                        <Avatar alt="Rakesh" src="/static/images/avatar/1.jpg" sx={{
                            width: '35px',
                            height: '35px',
                        }} />
                        Rakesh kumawat
                    </MenuItem>
                ))}
            </Box>
        </Box>
    return (
        <>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <GroupAddIcon />
            </IconButton>

            <CustomMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                handleClose={() => setAnchorEl(null)}
                content={content}
            />
        </>
    )
}

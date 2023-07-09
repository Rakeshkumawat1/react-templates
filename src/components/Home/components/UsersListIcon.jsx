import React, { useState } from 'react';
import { IconButton, MenuItem, Box } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CustomMenu from '../../../layouts/Menu';

export default function UsersListIcon() {
    const [anchorEl, setAnchorEl] = useState(null)
    const content =
        <Box>
            <MenuItem>Hello</MenuItem>
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

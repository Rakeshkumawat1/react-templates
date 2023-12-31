import React from 'react';
import PropTypes from 'prop-types';
import { Menu, useTheme, } from '@mui/material';

function CustomMenu(props) {
    const theme = useTheme();
    const {
        anchorEl,
        open,
        handleClose,
        content,
        id = "custom-menu",
        transformOrigin = { horizontal: 'right', vertical: 'top' },
        anchorOrigin = { horizontal: 'right', vertical: 'bottom' },
        PaperProps = {
            elevation: 0,
            sx: {
                backgroundColor: theme.palette.mode === 'light' ? 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' : '#414141',
                backgroundImage: theme.palette.mode === 'light' ? 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' : '#414141',
                marginTop: .5,
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 15,
                    width: 10,
                    height: 10,
                    backgroundColor: theme.palette.mode === 'light' ? 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' : '#414141',
                    backgroundImage: theme.palette.mode === 'light' ? 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' : '#414141',  //'background.default', #121212
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
            },
        }
    } = props || {};
    return (
        <Menu
            anchorEl={anchorEl}
            id={id}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={PaperProps}
            transformOrigin={transformOrigin}
            anchorOrigin={anchorOrigin}
        >
            {content}
        </Menu>
    )
}

CustomMenu.propTypes = {
    anchorEl: PropTypes.object,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    id: PropTypes.string,
    transformOrigin: PropTypes.object,
    anchorOrigin: PropTypes.object,
    PaperProps: PropTypes.object,
}

export default CustomMenu;
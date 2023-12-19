import { Box, FormControlLabel, IconButton, Menu, MenuItem, Switch, Typography, useTheme } from "@mui/material"
import MoreIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import useThemeStore from "../../hooks/ThemeStore";

export const ToggleThemeMenu = (): JSX.Element => {


    const { theme, toggleTheme } = useThemeStore(state => ({
        theme: state.theme,
        toggleTheme: state.toggleTheme
    }));

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Box>
            <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color={"inherit"}
                onClick={handleClick}
            >
                <MoreIcon  />
            </IconButton>
            <Menu
                sx={{
                    '& .MuiMenuItem-root': { // Targeting all MenuItem components
                        textAlign: 'right',
                    },
                    '& .MuiPaper-root': {
                        minWidth: 200,
                        maxHeight: 300,
                        // ... other styles ...
                    }
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock={true}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {/* Add your menu items here */}
                <MenuItem>
                    <FormControlLabel
                        control={<Switch
                            checked={theme.palette.mode === 'dark'}
                            onChange={toggleTheme}
                            color="primary" />} labelPlacement="start" label={"Toggle theme"} />

                </MenuItem>
            </Menu>
        </Box>
    );
};
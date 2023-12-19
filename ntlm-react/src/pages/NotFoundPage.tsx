import React, { useEffect, useState } from "react";
import { Typography, Button, Container, Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const NotFoundPage = (): JSX.Element => {
    const [reloading, setReloading] = useState(false);

    useEffect(() => {
        const appValue = sessionStorage.getItem('App');
        if (appValue === 'react') {
            sessionStorage.setItem('App', 'iris');
            setReloading(true);
            window.location.reload();
        }
    }, []);

    if (sessionStorage.getItem('App') === 'iris')
    {
        return <></>;
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
                <ErrorOutlineIcon sx={{ fontSize: 100, color: 'primary' }} />
                <Typography variant="h4" component="h1" gutterBottom>
                    404 - Sidan hittades inte
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Sidan du letar efter hittades inte. Just den här sidan ska du inte kunna se faktiskt så rapportera detta som en bugg och skicka vilken url du är inne på.
                </Typography>
            </Box>
        </Container>
    );
};

import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Header = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Country Service
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

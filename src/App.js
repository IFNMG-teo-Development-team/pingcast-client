import React from "react";
import { Link, Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import PingCastAppBar from "./components/AppBar";


const App = () => {
    
    
    return <>
        <Box sx={{ display: 'flex' }} >
            <PingCastAppBar />
            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
            >
                <br/>
                <br/>
                <br/>   
                <Outlet/>
            </Box>
        </Box>
    </>
}

export default App;
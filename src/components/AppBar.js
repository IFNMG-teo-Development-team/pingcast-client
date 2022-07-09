import { AppBar, Button, Container, Toolbar } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const PingCastAppBar = () => {

    return <AppBar position="fixed">
        <Container maxWidth="xl">
            <Toolbar >
                <Link to="/" > 
                    <Button color="inherit" >Home</Button>
                </Link>
                <Link to="/about">
                    <Button color="inherit" >About</Button>
                </Link>
            </Toolbar>
        </Container>
    </AppBar>
}

export default PingCastAppBar
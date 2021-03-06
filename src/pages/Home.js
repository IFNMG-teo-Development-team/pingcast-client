import React from 'react';
import '../assets/css/components/BoxLogin.css'

{/* Componentes*/ }
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom"
import BoxLogin from '../components/BoxLogin'
import Texto from '../components/Texto'
import HeadPage from '../components/HeadPage'
import Button from '@mui/material/Button'
import { NavLink } from "react-router-dom";

import { isAuthenticated } from '../services/auth'

import Logo from '../assets/img/logo.png'

const PageNotLogged = () => {
    return (
        <main>
            <HeadPage />
            <Container maxWidth="lg" className='h-100 mt-5'>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Texto value="Fazer Login" as="h2" className='mb-3 titulo' />
                        <BoxLogin />
                        <Box className='d-flex justify-content-center mt-4'>
                            <Texto value="Ainda não tem uma conta?" as="p" className='texto-simples color-cinza-claro me-2' />
                            <Link to="criar-conta" className='texto-simples color-azul text-decoration-none'>Criar conta</Link>
                        </Box>
                    </Grid>


                    <Grid item xs={6} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} className="align-items-center justify-content-center">
                        <Box id='bg' className="h-100"></Box>
                        <Box className="bg-texto">
                            <img src={Logo} width="400px" />
                            <Texto value="A 127.0.0.1 favorita do Dev"
                                as="p" className="color-cinza-claro" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </main>
    )
}   

const PageLogged = () => {

    return (
        <main>
            <HeadPage titulo="Home" />
            <Container maxWidth="lg" className='h-100 mt-5'>
                <h1 className='text-center'>Bem vindo de volta</h1>
            </Container>

        </main>
    )
}

const HomePage = () => {
    return (
        <>
            {isAuthenticated() ? <PageLogged /> : <PageNotLogged />}
        </>
    )
}

export default HomePage;
import React from 'react'
import Main from '../components/Main'

// Componentes
import HeadPage from '../components/Head'
import Grid from '@mui/material/Grid'
import Aside from  '../components/Aside'
import NavBar from '../components/NavBar/NavBarLogged'

import * as User from '../models/Users'

import * as Login from '../services/Login'
import { getUserId } from '../client/auth';

const Home = () => {
    const userData = 2

    return (
        <Grid container className='h-screen w-full'>

            <HeadPage titulo="Home" />

            <Grid item md={3} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} className='bg-cinza-50'>
                <Aside />
            </Grid>

            <Grid item xs={12} md={9}>
                <Main maxWidth='xl' bg='bg-azul-500' className="">
                    <NavBar />
                    
                </Main >
            </Grid>
        </Grid>
    )
}

export default Home
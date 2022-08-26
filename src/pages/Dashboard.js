import React from 'react'
import Main from '../components/Main'

// Componentes
import HeadPage from '../components/Head'
import Grid from '@mui/material/Grid'
import Aside from  '../components/Aside'
import NavBar from '../components/NavBar/NavBarLogged'
import Player from '../components/Player'

import * as User from '../models/Users'

import * as Login from '../services/Login'
import { getUserId } from '../client/auth';

const Home = () => {
    const userData = 2

    return (
        <Grid container className='h-screen w-full'>

            <HeadPage titulo="Home" />

            <Grid item xs={2} sm={1} md={3} className=' bg-cinza-50'>
                <Aside />
            </Grid>

            <Grid item xs={10} sm={11} md={9}>
                <Main maxWidth='xl' bg='bg-azul-500' className="">
                    <NavBar />

                    <Player />

                </Main >
            </Grid>
        </Grid>
    )
}

export default Home
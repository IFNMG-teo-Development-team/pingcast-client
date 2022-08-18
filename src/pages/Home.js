import React from 'react'
import Main from '../components/Main'

// Componentes
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom"
import HeadPage from '../components/Head'
import BoxLogin from '../components/BoxLogin'
import Typography from '@mui/material/Typography'

import Logo from '../assets/img/logo.png'
import Bg from '../assets/img/studio-podcast.png'

const Home = () => {
    return (
        <Main maxWidth='lg' >
            <HeadPage />
            <Grid container className='h-screen flex items-center'>

                <Grid item xs={12} md={6} className='flex items-center flex-col'>
                    <Typography component="h2" className="mb-3 font-bold text-xl text-azul-300 font-opensans">
                        Fazer Login
                    </Typography>

                    <BoxLogin />

                    <Box className='flex text-md justify-center mt-4'>
                        <Typography component="p" className="text-cinza-200 mr-2">
                            Ainda não tem uma conta?
                        </Typography>
                        <Link to="cadastrar" className='font-opensans text-azul-200 decoration-none'>Criar conta</Link>
                    </Box>
                </Grid>

                <Grid item xs={6} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} className="items-center justify-center">
                    <Box id='bg' className="h-100"></Box>
                    <Box className="flex flex-col">
                        <Box className='z-10'>
                            <img src={Logo} width="400px" alt="logo da pagina"/>
                            <Typography component="p" className="font-opensans text-cinza-200 me-2 font-medium text-xl">
                                A 127.0.0.1 favorita do Dev
                            </Typography>
                        </Box>

                        <Box className="absolute inset-y-0 right-0 w-1/2">
                            <img className="w-full h-full object-cover object-left-top"
                                src={Bg}
                                alt="banner" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Main>
    )
}

export default Home
import React from 'react'
import Main from '../components/Main'

// Componentes
import HeadPage from '../components/Head'
import Grid from '@mui/material/Grid'

const Home = () => {
    return (
        <Main maxWidth='xl'>
            <HeadPage titulo="Home" />

            <Grid container className='h-screen flex items-center'>
                <Grid item xs={4} sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} >
                    MENU
                </Grid>

                <Grid item xs={12} md={8}>
                    CONTEUDO
                </Grid>
            </Grid>
        </Main >
    )
}

export default Home
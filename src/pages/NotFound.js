import React from 'react'
import Main from '../components/Main'

// Componentes
import HeadPage from '../components/Head'
import imageNotFound from '../assets/img/imageNotFound.jpg'
import Typography from '@mui/material/Typography'

const NotFound = () => {
    return (
        <Main maxWidth="xl" className="flex justify-center items-center flex-col pt-16">

            <HeadPage titulo="Página não encontrada" />

            <Typography component="h4" className="mt-4 mb-4 text-center text-2xl mx-10 my-2 font-opensans text-black">
                Página não encontrada, por aqui só tem uma bela partida de ping-pong enquanto falamos das novidades do Java
            </Typography>

            <img className='w-96' src={imageNotFound} alt="pagina nao encontrada" />
        </Main>
    )
}

export default NotFound
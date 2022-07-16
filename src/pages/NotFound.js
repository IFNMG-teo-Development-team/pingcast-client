import React from 'react'

{/* Componentes*/ }
import HeadPage from '../components/HeadPage'
import imageNotFound from '../assets/img/imageNotFound.jpg'
import Texto from '../components/Texto'
import Container from '@mui/material/Container';

const NotFound = () => {
    return (
        <main>
            <HeadPage titulo="Página não encontrada" />
            <Container maxWidth="xl" className="d-flex justify-content-center align-items-center flex-column">
                <Texto value="Página não encontrada, por aqui só tem uma bela partida de ping-pong enquanto falamos das novidades do Java"
                    as="h4" className='mt-4 mb-4 text-center' />
                <img width="400px" src={imageNotFound} />
            </Container>
        </main>
    )
}

export default NotFound
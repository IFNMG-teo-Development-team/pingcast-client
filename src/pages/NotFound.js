import React from 'react'

{/* Componentes*/ }
import HeadPage from '../components/HeadPage'
import imageNotFound from '../assets/img/imageNotFound.jpg'
import Image from 'react-bootstrap/Image'
import Texto from '../components/Texto'
import Container from 'react-bootstrap/Container'

const NotFound = () => {
    return (
        <main>
            <HeadPage titulo="Página não encontrada" />
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <Image thumbnail width="400px" src={imageNotFound}/>
                <Texto value="Página não encontrada, por aqui só tem uma bela partida de ping-pong enquanto falamos das novidades do Java"
                    as="h4" className='mt-3 text-center' />
            </Container>
        </main>
    )
}

export default NotFound
import React from 'react';
import '../assets/css/components/BoxLogin.css'

{/* Componentes*/ }
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoxLogin from '../components/BoxLogin'
import Texto from '../components/Texto'
import HeadPage from '../components/HeadPage'
import Image from 'react-bootstrap/Image'
import bg from '../assets/img/bg.png'

const HomePage = () => {
    return (
        <main>
            <HeadPage titulo="Home " />
            <Container className='h-100 mt-5'>
                <Row>
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                        <Texto value="Fazer Login" as="h2" className='mb-3 mt-3 titulo' />
                        <BoxLogin />
                        <div className='d-flex justify-content-center mt-4'>
                            <Texto value="Ainda não tem uma conta?" as="p" className='texto-simples color-cinza-claro me-2' />
                            <Link to="criar-conta" className='texto-simples color-azul'>Criar conta</Link>
                        </div>
                    </Col>

                    <Col className="d-none d-md-flex align-items-center">
                        <div id='bg' className="h-100"></div>
                        <div className="bg-texto">
                            <Texto value="PingCast" as="h1" className="mb-3" />
                            <Texto value="A 127.0.0.1 favorita do Dev" 
                            as="p" className="color-cinza-claro" />
                        </div>
                    </Col>
                </Row>

            </Container>
        </main>
    )
}

export default HomePage;

{/*
    BG: #f8f9fa
    Cores azul: #2152ff,#21d4fd
    cores: linear-gradient(310deg,#2152ff,#21d4fd)
*/}
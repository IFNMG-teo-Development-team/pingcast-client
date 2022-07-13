import React from "react";
import '../assets/css/components/BoxLogin.css'

{/* Componentes*/ }
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BoxLogin from '../components/BoxLogin'
import LogoHome from '../components/LogoHome'

const HomePage = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col className="d-flex flex-column align-items-center justify-content-center">
                    <LogoHome value="Fazer Login" />
                    <BoxLogin />
                </Col>

                <Col className="d-none d-md-flex align-items-center justify-content-end">
                    [a imagem vem aqui]
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage;

{/*
    BG: #f8f9fa
    Cores azul: #2152ff,#21d4fd
    cores: linear-gradient(310deg,#2152ff,#21d4fd)
*/}
import React from 'react'
import '../assets/css/components/Footer.css'

{/* Componentes*/ }
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import { IoMdArrowDropright } from 'react-icons/io'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='d-block w-100 pt-5'>
            <Container className='d-flex flex-column'>

                <Row>
                    <Col>
                        <h3>PingCast</h3>
                        <p>
                            Teófilo Otoni, MG <br />
                            IFNMG <br />
                            <strong>IFNMG: </strong><a href='#'>www.ifnmg.edu.br/teofilo-otoni/</a><br></br>
                        </p>
                    </Col>
                    <Col>
                        <h4>Links uteis</h4>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link href="/">
                                <IoMdArrowDropright />
                                Home
                            </Nav.Link>
                            <Nav.Link eventKey="/">
                                <IoMdArrowDropright />
                                Sobre
                            </Nav.Link>
                            <Nav.Link eventKey="link-2">
                                <IoMdArrowDropright />
                                Termos de privacidade
                            </Nav.Link>
                            <Nav.Link eventKey="link-2">
                                <IoMdArrowDropright />
                                Política de privacidade
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="d-flex d-none">
                        <h4>Nossos serviços</h4>
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link href="/">
                                <IoMdArrowDropright />
                                PingCast Premium
                            </Nav.Link>
                            <Nav.Link eventKey="/">
                                <IoMdArrowDropright />
                                Parcerias
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Nossas redes sociais</h4>
                        <p>Siga nossa plataforma nas redes sociais e também colobore com o código e faça parte do time</p>
                        <div className='mt-3'>
                            <a href="https://github.com/IFNMG-teo-Development-team">
                                <Button className='d-flex align-items-center justify-content-center rounded-circle icone'>
                                    <BsGithub className="" />
                                </Button>{' '} 
                            </a>
                            
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='mt-4 bg-azul d-flex align-items-center justify-content-center copyright'>
                <Container className="d-flex align-items-center justify-content-between p-2 m-1 pt-4 w-100 text-bg-dark copyright">
                    <p className='color-branco'>© Copyright PingCast Corp. All Rights Reserved</p>
                    <p className='color-branco'>UUUII, ele gosta!! Feito com ❤ pelos alunos do IFNMG</p>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
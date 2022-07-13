import React from 'react'
import '../assets/css/components/Footer.css'

{/* Componentes*/ }
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer className='d-block bg-white'>
            <Container className='d-flex flex-column'>


                <Row>
                    <Col>
                        <h3>PingCast</h3>
                        <p>
                            Teófilo Otoni, MG <br />
                            IFNMG <br />
                            <strong>Site: </strong> www.ifnmg.edu.br/teofilo-otoni/<br></br>
                        </p>
                    </Col>
                    <Col>
                        Links uteis
                    </Col>
                    <Col
                    >Nossos serviços
                    </Col>
                    <Col>
                        Nossas redes sociais
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
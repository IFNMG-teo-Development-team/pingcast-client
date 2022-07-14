import React from 'react'
import '../assets/css/components/AppBar.css'

{/* Componentes*/ }
import Container from 'react-bootstrap/Container'
import { NavLink } from "react-router-dom";
import logo from '../assets/img/spotify.png'
import iconeCafe from '../assets/img/coffee.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

const PingCastAppBar = () => {

    return (
        <header>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center justify-content-center">
                        <NavLink to="/" className="brand p-2 d-flex align-items-center text-decoration-none">
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top me-2"
                                alt="PingCast logo"
                            />
                            PingCast
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="appbar" />

                    <Navbar.Collapse id="appbar">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink to="/" className="opc p-2">
                                Home
                            </NavLink>

                            <NavLink to="sobre" className="opc p-2 text-bg-light">
                                Sobre
                            </NavLink>

                            <NavLink to="donate" className="d-flex align-items-center ms-5 buy-me text-decoration-none">
                                <Button className="degrade-azul">
                                    <img
                                        width="30"
                                        height="30"
                                        className="me-0 me-md-2"
                                        src={iconeCafe}
                                    />
                                    Buy me a coffee
                                </Button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default PingCastAppBar
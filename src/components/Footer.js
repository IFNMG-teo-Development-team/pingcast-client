import React from 'react'
import '../assets/css/components/Footer.css'

{/* Componentes*/ }
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { NavLink } from "react-router-dom";
import List from '@mui/material/List';
import Texto from '../components/Texto'
import Avatar from '@mui/material/Avatar';

{/* Ícones */ }
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className='d-block w-100 pt-5'>
            <Container maxWidth="lg" className='d-flex flex-column'>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3} >
                        <Texto value="PingCast" as="h3" />
                        <p>
                            Teófilo Otoni, MG <br />
                            IFNMG <br />
                            <strong>IFNMG: </strong><a href='https://www.ifnmg.edu.br/teofilo-otoni'>www.ifnmg.edu.br/teofilo-otoni/</a><br></br>
                        </p>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} >
                        <Texto value="Links uteis" as="h4" />
                        <List className="flex-column">
                            <NavLink to="/">
                                <ArrowRightIcon />
                                Home
                            </NavLink>
                            <NavLink to="sobre">
                                <ArrowRightIcon />
                                Sobre
                            </NavLink>
                            <NavLink to="termos-privacidade">
                                <ArrowRightIcon />
                                Termos de privacidade
                            </NavLink>
                            <NavLink to="politica-privacidade">
                                <ArrowRightIcon />
                                Política de privacidade
                            </NavLink>
                        </List>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} >
                        <Texto value="Nossos serviços" as="h4" />
                        <List className="flex-column">
                            <NavLink to="donate">
                                <ArrowRightIcon />
                                PingCast Premium
                            </NavLink>
                            <NavLink to="/parcerias">
                                <ArrowRightIcon />
                                Parcerias
                            </NavLink>
                        </List>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} >
                        <Texto value="Nossas redes sociais" as="h4" />
                        <Texto value="Siga nossa plataforma nas redes sociais e também colobore com o código e faça parte do time" as="p"/>

                        <div className='mt-3'>
                            <a href="https://github.com/IFNMG-teo-Development-team">
                                <Avatar className='d-flex align-items-center justify-content-center icone'>
                                    <GitHubIcon />
                                </Avatar>
                            </a>

                        </div>
                    </Grid>
                </Grid>
            </Container>

            <div className='mt-4 bg-azul d-flex align-items-center justify-content-center copyright'>
                <Container className="d-flex align-items-center justify-content-between flex-column flex-md-row p-2 m-1 w-100 copyright">
                    <Texto value="© Copyright PingCast Corp. All Rights Reserved" className='color-branco' as="p" />
                    <Texto value="Feito com ❤ pelos alunos do IFNMG" className='color-branco' as="p" />
                </Container>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'

// Componentes
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { NavLink } from "react-router-dom";
import List from '@mui/material/List';
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';

// Ícones
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className='w-full pt-5 bg-cinza-100'>
            <Container maxWidth="lg" className='flex flex-col'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography component="h3" className="text-azul-400 font-jost text-3xl uppercase font-semibold leading-normal">
                            PingCast
                        </Typography>

                        <Typography className='font-jost text-cinza-300 text-sm' component="p">
                            Teófilo Otoni, MG <br />
                            IFNMG <br />
                            <strong>IFNMG: </strong><a href='https://www.ifnmg.edu.br/teofilo-otoni' className='hover:underline'>www.ifnmg.edu.br/teofilo-otoni/</a><br></br>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} >
                        <Typography className='text-azul-400 font-jost text-md font-semibold leading-loose' component="h4">Links uteis</Typography>
                        <List className="flex flex-col font-jost text-cinza-300 text-sm">
                            <NavLink className='my-1' to="/">
                                <ArrowRightIcon className='fill-azul-200' />
                                Home
                            </NavLink>
                            <NavLink className='my-1' to="sobre">
                                <ArrowRightIcon className='fill-azul-200' />
                                Sobre
                            </NavLink>

                            <NavLink className='my-1' to="termos-privacidade">
                                <ArrowRightIcon className='fill-azul-200' />
                                Termos de privacidade
                            </NavLink>

                            <NavLink className='my-1' to="politica-privacidade">
                                <ArrowRightIcon className='fill-azul-200' />
                                Política de privacidade
                            </NavLink>
                        </List>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} >
                        <Typography className='text-azul-400 font-jost text-md font-semibold leading-loose' component="h4">Nossos serviços</Typography>
                        <List className="flex flex-col font-jost text-cinza-300 text-sm">
                            <NavLink className='py-1' to="donate">
                                <ArrowRightIcon className='fill-azul-200' />
                                PingCast Premium
                            </NavLink>
                            <NavLink className='py-1' to="parcerias">
                                <ArrowRightIcon className='fill-azul-200' />
                                Parcerias
                            </NavLink>
                        </List>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} >
                        <Typography className='text-azul-400 font-jost text-md font-semibold leading-loose' component="h4">Nossas redes sociais</Typography>
                        <Typography className='font-jost text-cinza-300 text-sm mt-2' component="p">Siga nossa plataforma nas redes sociais e também colobore com o código e faça parte do time</Typography>

                        <div className='mt-3 flex flex-row '>
                            <a href="https://github.com/IFNMG-teo-Development-team">
                                <Avatar className='flex flex-row items-center justify-center'>
                                    <GitHubIcon />
                                </Avatar>
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <div className='mt-4 bg-azul-200 text-white flex items-center justify-center'>
                <Container className="flex items-center justify-between flex-col md:flex-row p-2 py-6 m-1 w-full">
                    <Typography className="text-sm font-jost" component="p">© Copyright PingCast Corp. All Rights Reserved</Typography>
                    <Typography className="text-sm font-jost" component="p">Feito com ❤ pelos alunos do IFNMG</Typography>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
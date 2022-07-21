import * as React from 'react';
import '../assets/css/components/AppBar.css'

{/* Componentes*/ }
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Texto from '../components/Texto'
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import { isAuthenticated } from '../services/auth'

{/* Ícones */ }
import logo from '../assets/img/spotify.png'
import iconeCafe from '../assets/img/coffee.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

{/* Itens do menu de forma dinâmica */ }
const menuList = [
    {
        "id": 0,
        "name": "Home",
        "url": "/"
    },
    {
        "id": 1,
        "name": "Sobre",
        "url": "/sobre"
    }
]

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState([]);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <Texto value="MENU PRINCIPAL" as="h4" className='mb-2 mt-3 titulo text-center' />

            <List className="lista-header">
                {menuList.map((page) => (
                    <NavLink to={page.url} key={page.id}>
                        <MenuItem onClick={handleCloseNavMenu} key={page.id}>
                            <ListItemIcon >
                                <ArrowForwardIosIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    </NavLink>
                ))}

                <Divider />

                <NavLink to="donate" className='buy-me d-flex justify-content-center'>
                    <Button className="degrade-azul px-2" sx={{ my: 2, display: 'flex', p: '3px', color: 'white' }}>

                        <ImageListItem sx={{ mr: 1 }} >
                            <img
                                width="30"
                                height="30"
                                src={iconeCafe}
                            />
                        </ImageListItem>
                        Buy me a coffee
                    </Button>
                </NavLink>
            </List>
        </Box>
    )

    const ListaNav = () => {
        return (
            <>
            {menuList.map((page) => (
                <NavLink to={page.url} key={page.id}>
                    <Button
                        key={page.id}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.name}
                    </Button>
                </NavLink>
            ))}
            </>
        )
    }

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>

                    {/* Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="span"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >

                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="me-2"
                            alt="PingCast logo"
                        />

                        <NavLink to="/" className="logo">
                            PingCast
                        </NavLink>
                    </Typography>

                    {/* Grade de opçoes da navbar dentro do icone menu | para tela pequena */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }}>
                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={toggleDrawer(anchor, true)}
                                    color="inherit">
                                    <MenuIcon />
                                </IconButton>

                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </Box>

                    {/* Grade de opçoes da navbar | para tela grande */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto', alignItems: 'center' }}>
                        {isAuthenticated() ?  <ListaNav /> : <ListaNav />}

                        <NavLink to="donate" className='buy-me ms-4'>
                            <Button className="degrade-azul px-2" sx={{ my: 2, display: 'flex', p: '3px' }}>

                                <ImageListItem sx={{ mr: 1 }} >
                                    <img
                                        width="30"
                                        height="30"
                                        src={iconeCafe}
                                    />
                                </ImageListItem>
                                Buy me a coffee
                            </Button>
                        </NavLink>

                    </Box>


                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBar;
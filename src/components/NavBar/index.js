import React from 'react'

// Componentes
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
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

// Ícones
import logo from '../../assets/img/icone.png'
import iconeCafe from './coffee.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Itens do menu de forma dinâmica
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
    // AÇÕES DO MENU PARA TELAS PEQUENAS
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

    // LISTA DE OPÇÕES DO MENU
    const listOpc = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <Typography variant="h4" component="h4" className="text-xl text-center font-semibold mt-2 text-azul-400">
                MENU PRINCIPAL
            </Typography>

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

                <span className="flex justify-center mt-3">
                    <NavLink to="donate">
                        <Button className="text-white text-md gap-2 font-semibold font-opensans flex items-center p-1 px-2 bg-gradient-to-r from-azul-100 to-azul-200 group hover:scale-101">

                            <ImageListItem>
                                <img
                                    className="w-8 h-8 group-hover:animate-balanco"
                                    src={iconeCafe}
                                    alt="xicara de café"
                                />
                            </ImageListItem>
                            Buy me a coffee
                        </Button>
                    </NavLink>
                </span>
            </List>
        </Box>
    )

    // LISTA DE OPÇÕES DA NAVBAR
    const ListNotNavLogged = () => {
        return (
            <div className="gap-2 flex items-center">
                {menuList.map((page) => (
                    <NavLink to={page.url} key={page.id}>
                        <Button
                            key={page.id}
                            onClick={handleCloseNavMenu}
                            className="text-cinza-200 font-semibold font-opensans text-md"
                        >
                            {page.name}
                        </Button>
                    </NavLink>
                ))}

                <NavLink to="donate">
                    <Button className="text-white text-md gap-2 font-semibold font-opensans flex items-center p-1 px-2 bg-gradient-to-r from-azul-100 to-azul-200 group hover:scale-101">

                        <ImageListItem>
                            <img
                                className="w-8 h-8 group-hover:animate-balanco"
                                src={iconeCafe}
                                alt="xicara de café"
                            />
                        </ImageListItem>
                        Buy me a coffee
                    </Button>
                </NavLink>
            </div>
        )
    }

    return (
        <AppBar position="fixed" className="bg-cinza-50 shadow-md shadow-gray-300 text-azul-300">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>

                    {/* Logo */}
                    <Typography
                        className='font-jost flex items-center gap-2'
                        noWrap
                        component="span"
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >

                        <img
                            src={logo}
                            width="30"
                            height="30"
                            alt="PingCast logo"
                        />

                        <NavLink to="/" className="logo tracking-wider text-cinza-200 text-xl font-black">
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
                                    {listOpc(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </Box>

                    {/* Grade de opçoes da navbar | para tela grande */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto', alignItems: 'center' }}>
                        <ListNotNavLogged />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default NavBar
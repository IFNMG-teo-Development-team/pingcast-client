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
import { isAuthenticated, logout } from '../services/auth'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

{/* Ícones */ }
import logo from '../assets/img/icone.png'
import iconeCafe from '../assets/img/coffee.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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

    // LISTA DE OPÇÕES DO MENU QUANDO NÃO ESTÁ LOGADO
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

    // LISTA DE OPÇÕES DA NAVBAR CASO O USUARIO NÃO ESTEJA LOGADO
    const ListNotNavLogged = () => {
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
            </>
        )
    }


    // LISTA DE OPÇÕES DA NAVBAR CASO O USUARIO ESTEJA LOGADO
    const ListNavLogged = () => {
        // CONFIGURAÇÕES DAS NOTIFICAÇÕES DO USUARIO
        const [anchorElNotificacoes, setAnchorElNotificacoes] = React.useState(null);
        const openNotificacoes = Boolean(anchorElNotificacoes);
        const handleClickNotificacoes = (event) => {
            setAnchorElNotificacoes(event.currentTarget);
        };
        const handleCloseNotificacoes = () => {
            setAnchorElNotificacoes(null);
        };

        // ---------------------------------------------------------
        const [anchorEl, setAnchorEl] = React.useState(null);

        const isMenuOpen = Boolean(anchorEl);

        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        const handleProfileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const HandleLogOut = (evento) => {
            evento.preventDefault()
            logout()
        }

        return (
            <>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    aria-controls={openNotificacoes ? 'notificacoes-opc' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openNotificacoes ? 'true' : undefined}
                    onClick={handleClickNotificacoes}
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton className={'ms-2'} sx={{ p: 0 }}
                    size="large"
                    edge="end"
                    aria-label="Conta do usuário"
                    color="inherit"
                    onClick={handleClick}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar alt="Perfil de usuario" />
                </IconButton>

                {/* MENU DE OPÇÕES AO CLICAR NA FOTO DE PERFIL DA NAVBAR */}
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Avatar /> Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={HandleLogOut}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>

                {/* MENU DE OPÇÕES AO CLICAR NAS NOTIFICAÇÕES DA NAVBAR */}
                <Menu
                    id="notificacoes-opc"
                    anchorEl={anchorElNotificacoes}
                    open={openNotificacoes}
                    onClose={handleCloseNotificacoes}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleCloseNotificacoes}>Notificacao1</MenuItem>
                    <MenuItem onClick={handleCloseNotificacoes}>Notificacao2</MenuItem>
                </Menu>
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
                        {isAuthenticated() ? <ListNavLogged /> : <ListNotNavLogged />}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBar;
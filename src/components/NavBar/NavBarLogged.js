import React from 'react'

// Componentes
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { NavLink } from "react-router-dom"

// Ícones
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import NotificationsOutlined from '@mui/icons-material/NotificationsNone';
import Notifications from '@mui/icons-material/Notifications';

import * as Login from '../../services/Login'
import * as User from '../../models/Users'
import { removeLogin, getUserId } from '../../client/auth'

const NavBar = () => {
    const [profile, setProfile] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await User.get(getUserId())
            setProfile(res.data)
        }

        fetchData().catch(console.error);

    }, [])


    // SOBRE O MENU DE NOTIFICAÇÕES
    const [anchorElBell, setAnchorElBell] = React.useState(null);
    const openBell = Boolean(anchorElBell);
    const handleClickBell = (event) => {
        setAnchorElBell(event.currentTarget);
    };
    const handleCloseBell = () => {
        setAnchorElBell(null);
    };

    // LOGOUT 
    const handleLogOut = async (evento) => {
        evento.preventDefault()

        await Login.LogOut()
        removeLogin()
    }

    // SOBRE O BTN DE OPC DE PERFIL
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className="bg-transparent shadow-none text-azul-300 h-16">
            <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>

                <Box className="relative text-gray-600">
                    <input type="search" name="serch" placeholder="Procurar por algo..." className="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none" />
                </Box>

                <Box sx={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>

                    {/* MENU DE NOTIFICAÇÕES */}
                    <Box>
                        <IconButton onClick={handleClickBell}
                            id="menu-notificacoes-button"
                            aria-controls={openBell ? 'menu-notificacoes' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openBell ? 'true' : undefined}
                            aria-label="cart">
                            <Badge badgeContent={4} color="primary">
                                {openBell ? <Notifications /> : <NotificationsOutlined />}
                            </Badge>
                        </IconButton>

                        <Menu
                            id="menu-notificacoes"
                            anchorEl={anchorElBell}
                            open={openBell}
                            onClose={handleCloseBell}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}>

                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start" className='hover:bg-gray-100 cursor-pointer'>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Você já ouviu falar sobre DevOps?"
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    João dos pods
                                                </Typography>
                                                {" — Eu irei te explicar em apenas 40m, Venha ouvir…"}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />

                                <ListItem alignItems="flex-start" className='hover:bg-gray-100 cursor-pointer'>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Você já ouviu falar sobre DevOps?"
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    João dos pods
                                                </Typography>
                                                {" — Eu irei te explicar em apenas 40m, Venha ouvir…"}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />

                                <ListItem alignItems="flex-start" className='hover:bg-gray-100 cursor-pointer'>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Você já ouviu falar sobre DevOps?"
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    João dos pods
                                                </Typography>
                                                {" — Eu irei te explicar em apenas 40m, Venha ouvir…"}
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />

                                <ListItem alignItems="flex-start" className='hover:bg-gray-100 cursor-pointer'>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Você já ouviu falar sobre DevOps?"
                                        secondary={
                                            <>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    João dos pods
                                                </Typography>
                                                {" — Eu irei te explicar em apenas 40m, Venha ouvir…"}
                                            </>
                                        }
                                    />
                                </ListItem>

                            </List>
                        </Menu>

                    </Box>

                    {/* MENU DO PERFIL */}
                    <Box className="gap-2 flex items-center">
                        <Tooltip title="Dados da conta">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                className='rounded-full gap-2 px-2'
                            >
                                <Avatar sx={{ width: 32, height: 32 }} />
                                <Typography sx={{ display: { xs: 'none', md: 'flex' } }} component="h3">
                                    {profile.nome}
                                </Typography>
                            </IconButton>
                        </Tooltip>

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
                            <NavLink to={`/u/${profile.username}`} className="w-full gap-2 my-1 flex items-center h-10 pl-4 hover:bg-gray-200 rounded-sm cursor-pointer">
                                <Avatar /> Ver perfil
                            </NavLink>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Adicionar Outra Conta
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Configurações
                            </MenuItem>
                            <MenuItem onClick={handleLogOut}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>

                    </Box>
                </Box>
            </Toolbar>
        </AppBar >
    );
}

export default NavBar
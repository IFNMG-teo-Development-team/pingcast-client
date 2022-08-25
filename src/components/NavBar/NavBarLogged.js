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
import TextField from '@mui/material/TextField'

// Ícones
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import NotificationsOutlined from '@mui/icons-material/NotificationsNone';
import Notifications from '@mui/icons-material/Notifications';

import { usePromise } from '@refetty/react'
import * as Login  from '../../services/Login'
import * as User from '../../models/Users'
import { removeLogin, getUserId } from '../../client/auth'

const teste = async () => {
    const id = getUserId()
    const profile = await User.get(id)
    console.log(profile)

    const kkk = await User.all()
    console.log(kkk)
}

const NavBar = () => {

    teste()

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
        <AppBar position="static" className="bg-transparent shadow-none text-azul-300">
            <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>

                <Box>
                    <TextField fullWidth className="rounded-lg mt-4"
                        label="Pesquisa" type={'search'}
                        variant="outlined" size="small" />
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
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                className='rounded-md gap-2'
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
                                <Typography sx={{ display: { xs: 'none', md: 'flex' } }} component="h3">Samuel</Typography>
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
                            <MenuItem>
                                <Avatar /> Ver perfil
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
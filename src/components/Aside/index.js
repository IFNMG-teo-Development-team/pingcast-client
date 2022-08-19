import React from 'react'

// Componentes
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NavLink } from "react-router-dom"

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';

// Ícones
import logo from '../../assets/img/icone.png'

const Aside = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <Box component="aside" className='w-full shadow-sm shadow-gray-300 p-6 pt-3'>

                {/* Logo */}
                <Typography
                    className='font-jost flex items-center gap-2 '
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

                    <NavLink to="/" className="logo tracking-wider text-cinza-200 text-2xl font-black">
                        PingCast
                    </NavLink>
                </Typography>

                {/* Lista de items*/}
                <List component="nav" className="mt-4 gap-2" aria-label="main mailbox folders">
                    <ListItemButton className='rounded-lg px-2 py-1 mb-1' >
                        <NavLink to='/' className={'flex'}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </NavLink>
                    </ListItemButton>

                    <ListItemButton className='rounded-lg px-2 py-1 mb-1' >
                        <NavLink to='/www' className={'flex'}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Outra coisa kk" />
                        </NavLink>
                    </ListItemButton>

                    <ListItemButton className='rounded-lg px-2 py-1 mb-1' >
                        <NavLink to='/www' className={'flex'}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Outra coisa kk" />
                        </NavLink>
                    </ListItemButton>

                </List>

                <Divider />
                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="sla kkk" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemText primary="Recentes" />
                    </ListItemButton>
                </List>

            </Box>
        </>
    )
}

export default Aside
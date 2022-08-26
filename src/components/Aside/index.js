import React from 'react'

// Componentes
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NavLink } from "react-router-dom"

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

// Ícones
import logo from '../../assets/img/icone.png'

const Aside = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <Box component="aside" className="w-full lg:block bg-gray-100 h-full">

                {/* Logo */}
                {/* Tela grande...*/}
                <Typography
                    className='font-jost gap-2 w-full h-16 md:px-4 flex items-center ml-4'
                    noWrap
                    component="span"
                    sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                    }} >

                    <img src={logo}
                        className="h-8 w-8"
                        alt="PingCast logo" />

                    <NavLink to="/" className="hidden md:flex logo tracking-wider text-cinza-200 text-2xl font-black">
                        PingCast
                    </NavLink>
                </Typography>


                <Divider />

                {/* Lista de items*/}
                <List component="nav" className="md:px-4 mt-3" aria-label="main mailbox folders">

                    <p className="hidden md:flex pl-4 text-sm font-semibold mb-1">MAIN</p>

                    <NavLink to='/' className="w-full gap-2 my-1 flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                        <svg className="w-8 h-8 md:h-6 md:w-6 fill-current" viewBox="0 0 20 20">
                            <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
                        </svg>
                        <span className="hidden md:flex text-gray-700">Home</span>
                    </NavLink>

                    <NavLink to='/opa' className="w-full gap-2 my-1 flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                        <svg className="w-8 h-8 md:h-6 md:w-6 fill-current" viewBox="0 0 20 20">
                            <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
                        </svg>
                        <span className="hidden md:flex text-gray-700">Analytics</span>
                    </NavLink>
                </List>

                <List component="nav" className="md:px-4" aria-label="main mailbox folders">

                    <p className="hidden md:flex pl-4 text-sm font-semibold mb-1">MUSICAS</p>

                    <NavLink to='/' className="w-full gap-2 my-1 flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                        <svg className="w-8 h-8 md:h-6 md:w-6 fill-current" viewBox="0 0 20 20">
                            <path d="M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z"></path>
                        </svg>
                        <span className="hidden md:flex text-gray-700">Home</span>
                    </NavLink>

                    <NavLink to='/opa' className="w-full gap-2 my-1 flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                        <svg className="w-8 h-8 md:h-6 md:w-6 fill-current" viewBox="0 0 20 20">
                            <path d="M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"></path>
                        </svg>
                        <span className="hidden md:flex text-gray-700">Analytics</span>
                    </NavLink>
                </List>

            </Box>
        </>
    )
}

export default Aside
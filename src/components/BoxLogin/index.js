import React from 'react'
import { Link } from "react-router-dom"

// Componentes
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import api from '../../services/api'
import { login, isAuthenticated } from '../../services/auth'

// Ícones
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const BoxLogin = (props) => {

    const [values, setValues] = React.useState({
        email: '',
        password: '',
    });

    const loginGithub = async (e) => {
        e.preventDefault()

        await api.get(`/login/github`)
            .then(res => {
                console.log(res.data)
                // window.open(url, '_blank');
            })
            .catch(err => {
                console.log(err)
            })
    }

    const loginGoogle = async (e) => {
        e.preventDefault()

        await api.post(`/login/google`)
            .then(res => {
                console.log("it's ok")
                // window.open(res.url, '_blank');
            })
    }

    const sendForm = async (evento) => {
        evento.preventDefault()

        await api.post(`/api/login`, {
            "email": values.email,
            "password": values.password
        })
            .then(res => {

                if (res.data.status === 200 && isAuthenticated() === false) {
                    login(res.data.token, res.data.id)
                    window.location.reload();
                }
                else if (isAuthenticated()) {
                    console.log("login já efetuado, espere um pouco!")
                }
                else if (res.data.status === 204) {
                    console.log(res.data.mensagem)
                }
                else {
                    console.log(res)
                }
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const LogSwitch = styled(Switch)(({ theme }) => ({
        width: 32,
        height: 18,
        padding: 0,
        marginRight: 8,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 14,
            height: 14,
            borderRadius: 8,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));

    return (
        <>
            <Box onSubmit={sendForm} component="form" sx={{ display: 'flex', flexWrap: 'wrap', width: '75%' }}>

                <TextField fullWidth className="rounded-lg mb-4" sx={{ mt: 1 }} id="cmp-email"
                    label="Digite seu email" onChange={handleChange('email')} variant="outlined" size="small" />

                <FormControl fullWidth sx={{ mt: 1 }} variant="outlined" size="small">
                    <InputLabel htmlFor="cmp-senha">Digite sua senha</InputLabel>
                    <OutlinedInput
                        id="cmp-senha"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Digite sua senha"
                    />
                </FormControl>

                <Grid className='font-opensans flex m-1 items-center' container>
                    <Grid item xs={6} sx={{ p: 1 }}>
                        <FormControlLabel className="text-cinza-200 text-sm md:text-md" value="agree" control={
                            <LogSwitch id="check-logged" inputProps={{ 'aria-label': 'switch design' }} />
                        } label="Permanecer logado" />
                    </Grid>

                    <Grid item xs={6} className="flex items-center justify-end"   ><Link sx={{}} to='/' className="text-azul-200 text-sm md:text-md font-semibold">Esqueceu sua senha</Link></Grid>
                </Grid>

                <Button fullWidth type="submit" className=" shadow-md py-2 font-bold text-md rounded-lg bg-gradient-to-r from-azul-100 to-azul-200 group hover:scale-101" variant="contained">Entrar</Button>
            </Box>

            <Box className='w-full'>
                <Typography component="p" className="text-center mt-4 mb-3 text-cinza-200">
                    Ou faça login com
                </Typography>

                <Box className="flex items-center justify-center gap-4">
                    <Button onClick={loginGoogle} className="m-1 p-2 px-10 gap-2" variant="outlined">
                        <GoogleIcon fontSize="small" />
                        Google
                    </Button>
                    <Button onClick={loginGithub} className="m-1 p-2 px-10 gap-2" variant="outlined">
                        <GitHubIcon fontSize="small" />
                        GitHub
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default BoxLogin
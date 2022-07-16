import React from 'react'
import { Link } from "react-router-dom"
import '../assets/css/components/BoxLogin.css'

{/* Componentes*/ }
import Texto from '../components/Texto'
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

{/* Ícones */ }
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const BoxLogin = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

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
            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', width: '75%' }}>

                <Texto value="Email" as="p" className='descricao' />
                <TextField fullWidth className="rounded-lg" sx={{ mt: 1 }} id="cmp-email" 
                label="Digite seu email" variant="outlined" size="small" />

                <Texto value="Senha" as="p" className='descricao mt-3' />
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

                <Grid container sx={{ m: 1, display: 'flex', alignItems: 'center' }} >
                    <Grid item xs={6} sx={{ p: 1 }}>
                        <FormControlLabel className="label-reduce color-cinza-claro" value="agree" control={
                            <LogSwitch id="check-logged" inputProps={{ 'aria-label': 'switch design' }} />
                        } label="Permanecer logado" />
                    </Grid>

                    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}   ><Link to='/' className="label-reduce texto-simples">Esqueceu sua senha</Link></Grid>
                </Grid>

                <Button fullWidth type="submit" className="w-100 degrade-azul shadow fw-bold p-2 rounded-lg" variant="contained">Entrar</Button>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Texto value="Ou faça login com"
                    as="p" className='text-center mt-4 color-cinza-claro' />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button sx={{ m: 1, p:1, px:5 }} variant="outlined">
                        <GoogleIcon fontSize="small" className='me-1' />
                        Google
                    </Button>
                    <Button sx={{ m: 1, p:1, px:5 }} variant="outlined">
                        <GitHubIcon fontSize="small" className='me-1' />
                        GitHub
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default BoxLogin
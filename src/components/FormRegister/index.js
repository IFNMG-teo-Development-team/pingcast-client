import React from 'react'

// Components
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'
import { Link } from "react-router-dom"
import { login, isAuthenticated } from "../../services/auth"

import api from '../../services/api'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

const Form = () => {
    // NOME DE CADA 'ETAPA'
    const [steps, setSteps] = React.useState(["Dados de usuário", "Informações pessoais", "Finalização"])

    const [activeSteps, setActiveStep] = React.useState(0) // ETAPA ATUAL

    const formInitialDetails = {
        username: '',
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        sexo: '',
        birth: '',
    }

    const [dados, setDados] = React.useState(formInitialDetails)

    function getStepsContent(value) {
        switch (value) {
            case 1:
                return (
                    <Box >
                        <Typography component={'h3'} className="text-center text-3xl mt-5">Criar Conta</Typography>

                        <Box className='flex text-md justify-center mt-2 mb-3'>
                            <Typography component="p" className="text-cinza-200 mr-2">
                                Já tem uma conta?
                            </Typography>
                            <Link to="cadastrar" className='font-opensans text-azul-200 decoration-none'>Fazer login</Link>
                        </Box>

                        {/* Nome */}
                        <Grid container spacing={2} className='flex items-center justify-center'>
                            <Grid item xs={10} md={8} lg={6}>
                                <TextField fullWidth className="rounded-lg mt-4"
                                    label="Digite seu username" type={'text'} value={dados.username} onChange={e => onFormUpdate('username', e.target.value)}
                                    variant="outlined" size="small" />
                            </Grid>
                        </Grid>

                        {/* Email */}
                        <Grid container spacing={2} className='flex items-center justify-center'>
                            <Grid item xs={10} md={8} lg={6}>
                                <TextField fullWidth className="rounded-lg mt-4"
                                    label="Digite seu email" type={'email'} value={dados.email} onChange={e => onFormUpdate('email', e.target.value)}
                                    variant="outlined" size="small" />
                            </Grid>
                        </Grid>

                        {/* Senha */}
                        <Grid container spacing={2} className='flex items-center justify-center'>
                            <Grid item xs={10} md={8} lg={6}>
                                <FormControl fullWidth className='mt-4' variant="outlined" size="small">
                                    <InputLabel htmlFor="cmp-senha">Digite sua senha</InputLabel>
                                    <OutlinedInput
                                        id="cmp-senha"
                                        type={dados.showPassword ? 'text' : 'password'}
                                        value={dados.senha} onChange={e => onFormUpdate('senha', e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {dados.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Digite sua senha"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} className='flex items-center justify-center'>
                            <Grid item xs={10} md={8} lg={6}>
                                <Grid item xs={6} sx={{ p: 1 }} className='flex items-center justify-start'>
                                    <FormControlLabel className="text-cinza-200 text-sm md:text-md" value="agree" control={
                                        <LogSwitch id="check-logged" inputProps={{ 'aria-label': 'switch design' }} />
                                    } label="Permanecer logado" />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Box>
                )
            case 2:
                return (
                    <Box >
                        <Typography component={'h3'} className="text-center text-3xl mt-5">Criar Conta</Typography>

                        {/* Nome e Sobrenome */}
                        <Grid container spacing={2} className='flex items-center justify-center'>
                            <Grid item xs={10} md={4} lg={3}>
                                <TextField fullWidth className="rounded-lg"
                                    label="Digite seu nome" value={dados.nome} onChange={e => onFormUpdate('nome', e.target.value)}
                                    variant="outlined" size="small" />
                            </Grid>
                            <Grid item xs={10} md={4} lg={3}>
                                <TextField fullWidth className="rounded-lg"
                                    label="Digite seu sobrenome" value={dados.sobrenome} onChange={e => onFormUpdate('sobrenome', e.target.value)}
                                    variant="outlined" size="small" />
                            </Grid>
                        </Grid>

                        {/* Sexo */}
                        <Grid container spacing={2} className='flex items-center justify-center'>
                            <Grid item xs={10} md={8} lg={6}>
                                <FormControl className="w-full mt-4" size="small">
                                    <InputLabel id="demo-select-small">Sexo</InputLabel>
                                    <Select
                                        labelId="sexo"
                                        id="sexo"
                                        value={dados.sexo}
                                        label="Age"
                                        onChange={e => onFormUpdate('sexo', e.target.value)}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'masculino'}>Masculino</MenuItem>
                                        <MenuItem value={'feminino'}>Feminino</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {/* Data */}
                        <Grid container spacing={2} className='flex items-center justify-center'>
                            <Grid item xs={10} md={8} lg={6}>
                                <TextField fullWidth className="rounded-lg mt-4"
                                    type={'date'} value={dados.birth} onChange={e => onFormUpdate('birth', e.target.value)}
                                    size="small" min="1930-01-01" max={`2015-01-01`}/>
                            </Grid>
                        </Grid>
                    </Box>
                )
            case 3:
                return <p>Aq vai a foto de perfil que será colocado </p>
            default:
                return 'Passo não definido'
        }
    }

    const handleClickShowPassword = () => {
        setDados({
            ...dados,
            showPassword: !dados.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // FUNÇÃO PROXIMO STEP
    const handleNext = () => {
        setActiveStep(prevActiveStep => (prevActiveStep + 1))
    }

    // FUNÇÃO VOLTAR STEP
    const handleBack = () => {
        setActiveStep(prevActiveStep => (prevActiveStep - 1))
    }

    // FUNÇÃO ENVIAR FORMULÁRIO
    const sendForm = async (e) => {
        e.preventDefault()

        // FAZ O CADASTRO
        await api.post(`/api/perfil`, {
            "username": dados.username,
            "nome": dados.nome,
            "sobrenome": dados.sobrenome,
            "email": dados.email,
            "senha": dados.senha,
            "sexo": dados.sexo,
            "birth": dados.birth,
        })
            .then(res => {
                api.post(`/api/login`, {
                    "email": dados.email,
                    "password": dados.senha
                })
                    .then(res => {
                        if (res.data.status === 200 && isAuthenticated() === false) {
                            login(res.data.token, res.data.id)
                            window.location.href = '/';
                        }
                    })
                    .catch(err => console.log(console.log(err)))
            })
            .catch(err => console.log(console.log(err)))
    }

    const onFormUpdate = (cmp, value) => {
        setDados({
            ...dados,
            [cmp]: value
        })
    }

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
        <Box className="mt-5">
            <Stepper alternativeLabel activeStep={activeSteps}>
                {steps.map(txt => (
                    <Step key={txt}>
                        <StepLabel>
                            {txt}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <>
                {activeSteps === steps.length ? (<Button onClick={sendForm} variant="contained" > Terminar cadastrado e acessar minha conta </Button>)
                    :
                    (<>{getStepsContent(activeSteps + 1)}
                        <Box className='flex gap-5 mt-12'>
                            <Button onClick={handleNext} variant="contained">
                                {activeSteps === steps.length ? "Final" : "Próximo"}
                            </Button>

                            {activeSteps === 0 ? <></> :
                                <Button onClick={handleBack} variant="outlined">
                                    Voltar
                                </Button>}
                        </Box>
                    </>)}
            </>


        </Box>
    )
}

export default Form
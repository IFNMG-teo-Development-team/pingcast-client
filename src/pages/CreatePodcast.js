import React from 'react'
import Main from '../components/Main'

// Componentes
import { useNavigate } from "react-router-dom"
import NavBar from '../components/NavBar/NavBarLogged'
import HeadPage from '../components/Head'
import Grid from '@mui/material/Grid'
import Aside from '../components/Aside'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// API
import * as User from '../models/Users'
import { getUserId } from '../client/auth'

const Create = () => {
    const [values, setValues] = React.useState({
        nome: '',
        bio: '',
        tema: ''
    });

    const sendForm = async (evento) => {
        evento.preventDefault()

        console.log(values)
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <Grid container className='h-screen w-full'>

                <HeadPage titulo={'Cadastrar podcast'} />

                <Grid item xs={2} sm={1} md={3} className=' bg-cinza-50'>
                    <Aside />
                </Grid>

                <Grid item xs={10} sm={11} md={9}>
                    <Main maxWidth='2xl' bg='bg-blueGray-200' >
                        <NavBar />

                        <Box onSubmit={sendForm} component={'form'} encType='multipart/form-data' className="shadow sm:rounded-md sm:overflow-hidden">
                            <Box className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <Typography variant="h4" className='text-center' component="h1" gutterBottom>
                                    Adicionar podcast
                                </Typography>

                                <TextField fullWidth className="rounded-lg mb-1" id="cmp-nome"
                                    label="Nome do podcast" onChange={handleChange('nome')} variant="outlined" size="small" required />

                                <TextField fullWidth className="rounded-lg mb-1" sx={{ mt: 1 }} id="cmp-bio"
                                    multiline maxRows={4} label="Descrição" onChange={handleChange('bio')} variant="outlined" size="small" required />

                                <FormControl className="w-full mt-4" size="small">
                                    <InputLabel id="demo-select-small">Tema</InputLabel>
                                    <Select
                                        labelId="Tema"
                                        id="tema"
                                        value={values.tema}
                                        label="Age"
                                        onChange={handleChange('tema')}
                                    >
                                        <MenuItem value="">
                                            <em>Selecione uma opção</em>
                                        </MenuItem>
                                        <MenuItem value={'Front-End'}>Front-End</MenuItem>
                                        <MenuItem value={'Back-End'}>Back-End</MenuItem>
                                        <MenuItem value={'Banco de dados'}>Banco de Dados</MenuItem>
                                        <MenuItem value={'Análise de sistemas'}>Análise de sistemas</MenuItem>
                                        <MenuItem value={'Tecnologias e afins'}>Dicas de tecnologias e afins</MenuItem>
                                    </Select>
                                </FormControl>


                                <Box>
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <input id="file-upload" onChange={handleChange('audio')} name="file-upload" type="file" className="sr-only" accept="audio/*" required/>
                                        <div className="space-y-1 text-center">

                                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <p className="pl-1"><span className="text-blue-700">Clique para escolher o podcast</span> ou arraste e solte</p>
                                            </div>
                                            <p className="text-xs text-gray-500">Apenas arquivos de áudio</p>
                                        </div>
                                    </label>
                                </Box>
                            </Box>

                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Salvar</button>
                            </div>
                        </Box>



                    </Main >
                </Grid>

            </Grid>
        </>
    )

}

export default Create
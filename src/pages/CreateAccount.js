import React from 'react'

{/* Componentes*/ }
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormCadastro from '../components/FormCadastro'
import HeadPage from '../components/HeadPage'


const CreateAccount = () => {
    return (
        <main className="mt-4">
            <HeadPage titulo="Criar conta" />
            <Container maxWidth="xl">
                <FormCadastro />
            </Container>
        </main>
    )
}

export default CreateAccount
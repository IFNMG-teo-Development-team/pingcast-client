import React from 'react'

{/* Componentes*/ }
import TextField from '@mui/material/TextField'

const StepOne = () => {
    return (
        <>
            <h3>Esse é o passo 1</h3>

            <TextField fullWidth sx={{ mt: 1 }} id="nome"
                label="Digite seu nome" variant="outlined" size="small" value={nome}/>

        </>
    )
}

export default StepOne
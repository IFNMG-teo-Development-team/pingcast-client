import React from 'react'

{/* Componentes*/ }
import TextField from '@mui/material/TextField'

const StepTwo = () => {
    return (
        <>
            <h3>Esse é o passo 2</h3>

            <TextField fullWidth sx={{ mt: 1 }} id="email"
                label="Digite seu email" variant="outlined" size="small" />
        </>
    )
}

export default StepTwo
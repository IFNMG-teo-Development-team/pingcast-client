import React from 'react'

{/* Componentes*/ }
import TextField from '@mui/material/TextField'

const StepThree = () => {
    return (
        <>
            <h3>Esse é o passo 3</h3>

            <TextField fullWidth sx={{ mt: 1 }} id="username"
                label="Se" variant="outlined" size="small" />
        </>
    )
}

export default StepThree
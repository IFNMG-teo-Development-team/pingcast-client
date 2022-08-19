import React from 'react'
import Container from '@mui/material/Container'

// LAYOUT PADRÃO PARA AS PAGINAS
const Main = (props) => {
    
    return (
        <main className={props.bg || 'bg-cinza-50'}>
            <Container maxWidth={props.maxWidth || 'lg'} className={props.className || ''}>
                {props.children}
            </Container>
        </main>
    )
}

export default Main
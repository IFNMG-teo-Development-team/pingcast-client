import React from 'react'
import Main from '../components/Main'

// Componentes
import HeadPage from '../components/Head'
import FormRegister from '../components/FormRegister'

const Cadastro = () => {
    return (
        <Main maxWidth='lg' className="pt-16">
            <HeadPage titulo="Cadastre-se" />
            <FormRegister />
        </Main>
    )
}

export default Cadastro
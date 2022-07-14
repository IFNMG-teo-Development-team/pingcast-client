import React from 'react'
import { Link } from "react-router-dom"
import '../assets/css/components/BoxLogin.css'

{/* Componentes*/ }
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BsGoogle, BsGithub } from 'react-icons/bs'

const BoxLogin = () => {

    return (
        <Form className="form-container w-75">
            <Form.Group className="mb-3" controlId="formularioLoginEmail">
                <Form.Label className="descricao">Email</Form.Label>
                <Form.Control className="rounded-lg" type="email" placeholder="Seu email ou nome de usuário" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formularioLoginSenha">
                <Form.Label className="descricao">Senha</Form.Label>
                <Form.Control className="rounded-lg" type="password" placeholder="Sua senha" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center justify-content-between flex-row" controlId="formularioLoginCheck">
                <Form.Check type="switch" className='color-cinza-claro texto-simples' label="Permanecer logado" />

                <Link to='/' className="text-decoration-none texto-simples texto">Esqueceu sua senha</Link>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 degrade-azul shadow text-uppercase fw-bold p-2 rounded-lg">
                Entrar
            </Button>

            <p className='d-flex justify-content-center mt-4 texto-simples color-cinza-claro'> Ou faça login com </p>

            <div className="mt-2 w-100 d-flex align-items-center justify-content-between">
                <Button variant="outline-primary" className="rounded-lg d-flex align-items-center justify-content-center w-50 me-3">
                    <BsGoogle className='me-2' />
                    Google
                </Button>{' '}
                <Button variant="outline-primary" className="rounded-lg d-flex align-items-center justify-content-center w-50 ms-3" >
                    <BsGithub className='me-2'/>
                    Github
                </Button>{' '}
            </div>
        </Form>
    )
}

export default BoxLogin
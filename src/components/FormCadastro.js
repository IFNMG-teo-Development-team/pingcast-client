import React, { useState } from 'react';
import '../assets/css/components/BoxLogin.css'

{/* Componentes*/ }
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StepOne from './registration/stepOne'
import StepTwo from './registration/stepTwo'
import StepThree from './registration/stepThree'

const FormCadastro = (props) => {

    const [steps, setSteps] = useState(["Dados de usuário", "Informações pessoais", "Finalização"])

    const [activeSteps, setActiveStep] = useState(0)

    let formularioLogin = [
        {
            "nome": "",
            "email": "",
            "username": ""
        }
    ]

    function getStepsContent(value) {
        switch (value) {
            case 1:
                return <StepOne />
            case 2:
                return <StepTwo />
            case 3:
                return <StepThree />
            default:
                return 'Passo não definido'
        }
    }

    const handleNext = () => {
        if(activeSteps == 1) {
            formularioLogin.nome = document.getElementById('nome').value
        }

        setActiveStep(prevActiveStep => (prevActiveStep + 1))
    }

    const handleBack = () => {
        setActiveStep(prevActiveStep => (prevActiveStep - 1))
    }

    const sendForm = () => {
        console.log("ok")
    }

    return (
        <Box >
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
                {activeSteps === steps.length ? (
                    <>
                        {"Cadastro finalizado com sucesso!"}
                        <br />
                        <Button onClick={sendForm} >
                            Finalizar cadastro
                        </Button>

                  

                    </>
                ) : (
                    <>
                        {getStepsContent(activeSteps + 1)}
                        <br /> <br /> <br />
                        <Button onClick={handleNext}>
                            {activeSteps === steps.length ? "Final" : "Próximo"}
                        </Button>

                        <Button onClick={handleBack}>
                            Voltar
                        </Button>
                    </>
                )}
            </>

        </Box>
    )
}

export default FormCadastro
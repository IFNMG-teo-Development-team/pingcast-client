import React from 'react'
import './assets/css/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { isAuthenticated } from "./services/auth"

// Paginas
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'

//Componentes
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      {
        isAuthenticated() ?
          (
            /* ROTAS AUTENTIFICADA */
            <>
              <Routes>
                <Route exact path="/" element={<Dashboard />} /> {/* PÁGINA INICIAL */}

                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          )
          :
          (
            /* ROTAS SEM AUTENTIFICAR */
            <>
              <Routes>
                <NavBar />
                <Route exact path="/" element={<Home />} /> {/* PÁGINA INICIAL */}

                <Route path="/cadastrar" element={<Cadastro />} /> {/* PÁGINA DE CADASTRO */}

                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          )
      }
      <Footer />
    </BrowserRouter>
  );
}

export default App;

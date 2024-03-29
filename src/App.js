import React from 'react'
import './assets/css/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { isAuthenticated } from "./client/auth"

// Paginas
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

import PodcastCreate from './pages/CreatePodcast'

import CanalCreate from './pages/CreateCanal'

//Componentes
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>

      {
        isAuthenticated() ?
          <> {/* Rotas para o usuário autentificado */}
            <Routes>
              <Route exact path="/" element={<Dashboard />} /> {/* PÁGINA INICIAL */}

              <Route path="/u/:username" element={<Profile />} /> {/* PERFIL DOS USUARIOS */}

              {/* ROTAS SOBRE PODCAST */}
              <Route path="podcast/create" element={<PodcastCreate />} />

              {/* ROTAS SOBRE CANAL */}
              <Route path="canal/create" element={<CanalCreate />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
          :
          <> {/* Rotas para o usuário NÃO autentificado */}
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} /> {/* PÁGINA INICIAL */}

              <Route path="/cadastrar" element={<Cadastro />} /> {/* PÁGINA DE CADASTRO */}

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
      }
    </BrowserRouter>
  );
}

export default App;

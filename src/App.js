import React from 'react'

import './assets/css/base/base.css'

{/* Paginas */ }
import Home from './pages/Home'
import About from './pages/About'
import Donate from './pages/Donate'
import NotFound from './pages/NotFound'
import CreateAccount from './pages/CreateAccount'

{/* Componentes */ }
import AppBar from './components/AppBar'
import Footer from './components/Footer'

import { BrowserRouter, Route, Routes} from "react-router-dom";

import { isAuthenticated } from "./services/auth";

const App = () => {
  return (
    <BrowserRouter>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<Home />}/>

        <Route path="sobre" element={<About />} />

        <Route path="donate" element={<Donate />} />

        <Route path="criar-conta" element={<CreateAccount />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App

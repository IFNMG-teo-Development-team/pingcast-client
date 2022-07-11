import React from 'react'

{/* Paginas */ }
import Home from './pages/Home'
import About from './pages/About'

{/* Componentes */ }
import AppBar from './components/AppBar'

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
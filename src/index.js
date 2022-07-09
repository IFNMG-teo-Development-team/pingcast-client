import React from "react";
import ReactDOM  from "react-dom/client";
import {
    BrowserRouter,
  Routes,
  Route,
}  from 'react-router-dom'


import App from "./App";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<App/>}  >
                <Route index element={<HomePage/>} />
                <Route path="about" element={<AboutPage />} /> 
            </Route>
        </Routes>
    </BrowserRouter>
);
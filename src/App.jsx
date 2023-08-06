import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Perfil from './Pages/Perfil';
import Detalles from './Pages/Detalles';
import Carrito from './Pages/Carrito';

const App = () => {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='Perfil' element={<Perfil/>}/>
        <Route path="Detalles" element={<Detalles/>}/>
        <Route path="Carrito" element={<Carrito/>}/>
        <Route path='*' element="no encontrado"/>
      </Routes>

      


     
      <Footer />
    </>
  )
}

export default App
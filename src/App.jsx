import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Inicio from './pages/Inicio'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
 
const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Inicio />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Route>
    </Routes>
  )
}
 
export default App
 
import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Inicio} from './Inicio'
import { Ejercicios } from './Ejercicios'


export const Nav = () => {
  return (
   <BrowserRouter>
   <nav>
    <Link to='/'>Inicio</Link>
    <Link to='/ejercicios'>Ejercicios</Link>
   </nav>
   <Routes>
     <Route path='/'element={<Inicio/>}/>
     <Route path='/ejercicios' element={<Ejercicios/>} />
   </Routes>
   </BrowserRouter>
  )
}

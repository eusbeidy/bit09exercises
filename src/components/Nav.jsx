import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Inicio} from './Inicio'
import { Ejercicios } from './Ejercicios'


export const Nav = () => {
  return (
   <BrowserRouter>
   <nav className='py-4 text-center'>
    <Link className='mx-2' to='/'>Inicio</Link>
    <Link className='mx-2' to='/ejercicios'>Ejercicios</Link>
   </nav>
   <Routes>
     <Route path='/'element={<Inicio/>}/>
     <Route path='/ejercicios' element={<Ejercicios/>} />
   </Routes>
   </BrowserRouter>
  )
}

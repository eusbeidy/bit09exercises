import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Ejercicio1 } from './Ejercicio1'
import { Ejercicio2 } from './Ejercicio2'


export const Ejercicios = () => {
  const [ejercicio, setEjercicio] = useState(null)

 
  return (
    <section>
  <h1 className='text-center'>Ejercicios</h1>
  {!ejercicio ? (
  <ol>
  <li onClick={() => setEjercicio(<Ejercicio1 />)}>Contador</li>
  <li onClick={() => setEjercicio(<Ejercicio2 />)}>Ejercicio 2</li>
  </ol>
   ) : (
    <div className='text-center'>
          {ejercicio}
          <Button variant='link' onClick={() => ejercicio(null)}>
            Regresar
          </Button>
        </div>
  )}
  </section>
  );
};

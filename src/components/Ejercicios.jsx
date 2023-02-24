import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Ejercicio1 } from './Ejercicio1'
import { Ejercicio2 } from './Ejercicio2'
import {Ejercicio3} from './Ejercicio3'


export const Ejercicios = () => {
  const [ejercicio, setEjercicio] = useState(null)

 
  return (
    <section>
  <h1 className='text-center'>Ejercicios</h1>
  {!ejercicio ? (
  <ol>
  <li onClick={() => setEjercicio(<Ejercicio1 />)}>Contador</li>
  <li onClick={() => setEjercicio(<Ejercicio2 />)}>Mostrar Imagenes</li>
  <li onClick={() => setEjercicio(<Ejercicio3 />)}>Directorio</li>
  </ol>
   ) : (
    <div className='text-center'>
          {ejercicio}
          <Button className='my-3' variant="outline-warning" onClick={() => setEjercicio(null)}>Regresar</Button>{' '}
        </div>
  )}
  </section>
  );
};

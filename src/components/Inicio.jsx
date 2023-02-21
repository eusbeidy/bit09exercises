import React from 'react'
import Figure from 'react-bootstrap/Figure'

export const Inicio = () => {
  return (
    <section className='d-flex flex-column align-items-center'>
      <h1 className='text-center'>Bienvenidos.!</h1>
      <Figure>
      <Figure.Image
      roundedCircle
        width={200}
        height={200}
        alt="200x200"
        src="src\img\me.jpg"
      />
      <Figure.Caption>
        Eusbeidy perez.
      </Figure.Caption>
    </Figure>
    </section>

  )
}

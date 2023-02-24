import React from 'react'
import Figure from 'react-bootstrap/Figure'

export const Inicio = () => {
  return (
    <section className='d-flex flex-column align-items-center'>
      <h1 className='text-center'>Bienvenidos.!</h1>
      <Figure>
      <Figure.Image
      roundedCircle
        width={300}
        height={300}
        alt="200x200"
        src="https://eusbeidy.github.io/bit07me/img/me.png"
      />
      <Figure.Caption className='h1'>
        Eusbeidy pérez.
      </Figure.Caption>
    </Figure>
    </section>

  )
}

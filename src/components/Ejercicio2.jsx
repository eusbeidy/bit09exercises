import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export const Ejercicio2 = () => {
    const [api, setApi] = useState('')
    const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
     
    const mostrarImg = async()=>{
      try {
        const response = await fetch('https://random-d.uk/api/v2/random')
        setApi(await response.json())
      } catch (error){
        setError(true)
    } finally {
      setTimeout(() => {
        setLoading(false)
       }, 3000);
      }
    }

  return(
    <section>
     <h2>Mostrar imagenes de patos</h2>
     {error
      ? <Alert variant="danger"><p>Ocurrió un error</p></Alert>
      : loading
      ? <Spinner animation="border" variant="success" />
      : api && <Image src={api.url} alt='patos' thumbnail className='my-5' />
    }
    <Button variant="info" onClick={mostrarImg} className="d-block mx-auto mb-5">Mostrar</Button>{''}
     </section>
  )
}

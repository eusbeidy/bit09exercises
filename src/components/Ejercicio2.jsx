import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';


export const Ejercicio2 = () => {
    const [api, setApi] = useState([])
    const [cargar, setCargar] = useState(false)
     
    const mostrarImg = (e) =>{
        fetch('https://random-d.uk/api/v2/random')
        .then(respose => respose.json())
        .then(data => setApi(data))
        .catch(error => console.log(error))

    }
    

  return(
    <section>
     <h2>Ejercicio 2</h2>
     <div>
        {api &&
     <Figure>
      <Figure.Image
      rounded
      thumbnail
        width={171}
        height={180}
        alt="171x180"
        src={api.url}
      />
    </Figure>
    }
    <Button variant="Mostrar Api" onClick={mostrarImg}>Info</Button>{''}
    
        </div>
     </section>
  )
}

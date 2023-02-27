import React,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';



export const Ejercicio3 = () => {
const [users, setUsers] = useState(null)
const [error, setError] = useState(false)
const [rows, setRows] = useState(null)
const [loading, setLoading] = useState(false)

useEffect (() => {
  direct()
},[])

useEffect(() => {
  if (users) {
    datosTabla()
    }
  },[users])

  const direct = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        setUsers(await response.json())
    } catch (error) {
        setError(true)
    }
    finally{
      setLoading(false)

    }
}


const datosTabla = () =>{
  const array = users.map((user)=>{
    return <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
    </tr>

  })
  setRows(array)
}
  return (
    <section>
        <h2>Ejercicio 3</h2>
        {error 
        ?
        <Alert variant='danger'>
         <p>error, la pagina no se esta cargando</p>
        </Alert> 
        : loading 
        ? <Spinner animation="grow" variant="warning" />
        : rows && 
        <Table striped bordered hover>
            <thead>
             <tr>
             <th>id</th>
             <th>Nombre</th>
             <th>telefono</th>
            </tr>
           </thead>
           <tbody>{rows}</tbody>
      </Table>}
    </section>
  )
}

import React,{useState} from 'react'
import { useAsyncValue } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

export const Ejercicio3 = () => {
const [directorio, setDirectorio] = useState([])

const direct = async() =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        setDirectorio(await response.json())
    } catch (error) {
        console.log(error)
    }

}
  return (
    <section>
        <h2>ejercicio3</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {directorio}
      </tbody>
    </Table>


    </section>
  )
}

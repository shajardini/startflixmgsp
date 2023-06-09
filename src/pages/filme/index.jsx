import './filme.css'
import {useState, useEffect} from 'react'
import api from '../../services/api'
import { useParams } from 'react-router-dom'


function Filme(){

const {id} = useParams()

const [filme, setFilme] = useState([])


useEffect(()=>{
  async function carregaFilme(){
    const response = await api.get(`/${id}`)
    setFilme(response)

  }
  carregaFilme()
},[])





    return(
      <div>
          <h1>Bem vindo a Filme!</h1>
      </div>
    )  
  }
  
  export default Filme
  

  

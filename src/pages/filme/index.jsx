import './filme.css'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import { useParams } from 'react-router-dom'


function Filme() {

  const { id } = useParams()

  const [filme, setFilme] = useState([])


  useEffect(() => {
    async function carregaFilme() {
      const response = await api.get(`/${id}`)
      setFilme(response.data)

    }
    carregaFilme()
  }, [])





  return (
    <div className='filme-info'>
      <h1>{filme.titulo}</h1>
      <img src={filme.url_img} alt={filme.titulo} />

      <h3>Sinopse</h3>
      <p>{filme.sinopse}</p>

      <div className='area-buttons'>
        <button>Salvar</button>
        <button><a>Trailer</a></button>
      </div>

    </div>
  )
}

export default Filme




import './filme.css'
import { useState, useEffect } from 'react'
import api from '../../services/api'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'


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

  function salvarFilme(){
    const minhaLista = localStorage.getItem("@filme")//obtem os filmes que estão salvos no localStorage

    let filmesSalvos = []//armazenar filmes salvos

    if(minhaLista){
      //verifica se a lista existe
      try{//caso sucesso
        filmesSalvos = JSON.parse(minhaLista)
      }
      catch (error){//caso erro
        console.error("Erro ao fazer o parse da lista de filmes: ", error)
      }
    }

    const temFilme = filmesSalvos.some((filmeSalvo)=>filmeSalvo.id === filme.id)

        if(temFilme){
          toast.error("Esse filme já está na sua lista!")
          return
        }

        filmesSalvos.push(filme)//add o filme na lista de filmes salvos.
        localStorage.setItem("@filme", JSON.stringify(filmesSalvos))
        toast.success("Filme Salvo!")
      }

  



  return (
    <div className='filme-info'>
      <h1>{filme.titulo}</h1>
      <img src={filme.url_img} alt={filme.titulo} />

      <h3>Sinopse</h3>
      <p>{filme.sinopse}</p>

      <div className='area-buttons'>
        <button onClick={salvarFilme}>Salvar</button>
        <button><a href={`https://www.youtube.com/results?search_query=${filme.titulo} Trailer`} target="_blank">Trailer</a></button>
      </div>

    </div>
  )
}

export default Filme




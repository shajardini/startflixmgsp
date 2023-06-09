import api from "../../services/api"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"



function Home() {
  const [filmes, setFilmes] = useState([])


  useEffect(() => {
    async function carregarFilme() {
      const resposta = await api.get()
      console.log(resposta.data)
      setFilmes(resposta.data)
    }


    carregarFilme()
  }, [])


  return (
    <div>
      <div className="lista">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.titulo}</strong>
              <img src={filme.url_img} alt={filme.titulo}/>
              
            </article>
          )
        })}
      </div>
    </div>
  )
}


export default Home
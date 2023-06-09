import {useState, useEffect} from 'react'
import './favoritos.css'



export default function Favoritos(){

    const [filme, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@filme")//obtendo a lista de filmes do armazenamento local

        if(minhaLista){
            setFilmes(JSON.parse(minhaLista))
        } else {
            setFilmes([])
        }


    },[])

    function excluir(id){
        let filtroFilmes = filme.filter((item)=>{
            return item.id !== id //1,3, 4, 5

            //Filtra os filmes e retornar apenas aqueles cujo id é diferente do id fornecido
        })
        setFilmes(filtroFilmes)//Atualiza  estado "Filme" com a lista filtrada.
        localStorage.setItem("@filme", JSON.stringify(filtroFilmes))//atualiza a lista de filmes do armazenamento local, convertendo para json.
    }

    return (
        <div className="meus-filmes">
            <h1>Meus filmes</h1>
            <ul>
                {filme.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.titulo}</span>
                            <div>
                            <button onClick={()=> excluir(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
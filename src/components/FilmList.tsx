import { useEffect, useState } from "react";
import { deleteFilme, getFilmes } from "../services/api";
import { Link } from "react-router-dom";


interface Filme{
    id: string,
    nome: string, 
    genero: string,
    anoLancamento: number,
    notaCritica: number,
    imgUrl: string
}

function FilmeList(){

    const [filmes, setFilmes] = useState<Filme[]>([]);
    useEffect(()=>{
        loadFilmes();
    },[]);

    const loadFilmes = async () =>{
        const response = await getFilmes();
        setFilmes(response.data);
    };
    const handleDelete = async (id : string) =>{
        await deleteFilme(id);
        loadFilmes();
    };

    return(
        <div>
            <div>
                <h3>Filme List</h3>

                <div>
                    <Link to='/add'>Add Filme</Link>
                </div>

                <ul>
                    {filmes.map((filme)=>(
                        <div key={filme.id}>
                        <img className="w-[20%]" src={filme.imgUrl} alt="Here you deserve to see the movie poster, so something went wrong... Sorry :( " /> 
                        {filme.nome} - 
                        {filme.notaCritica}
                        
                        
                        <button onClick={() =>handleDelete(filme.id)}>Delete</button>
                        <Link to={`/edit/${filme.id}`}>Edit</Link>
                        <Link to={`/view/${filme.id}`}>View</Link>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FilmeList;
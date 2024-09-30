import { useEffect, useState } from "react";
import { getFilmes } from "../services/api";


interface Filme{
    id: string,
    nome: string, 
    genero: string,
    anoLancamento: number,
    notaCritica: number,
    imgUrl: string
}

function FilmeView(){

    const [filmes, setFilmes] = useState<Filme[]>([]);
    useEffect(()=>{
        loadFilmes();
    },[]);

    const loadFilmes = async () =>{
        const response = await getFilmes();
        setFilmes(response.data);
    };
    return (
        <span>
        {filmes.map((filme)=>(
        <div key={filme.id}>
            <h1>Dados do Filme {filme.nome}</h1>
            <img src={filme.imgUrl} alt={"Imagem em processamento..."}/>
            <p>Gênero: {filme.genero}</p>
            <p>Ano de lançamento: {filme.anoLancamento}</p>
            <p>Nota Critica: {filme.notaCritica}</p>
        </div>
    
        ))}
</span>
    )
}

export default FilmeView;
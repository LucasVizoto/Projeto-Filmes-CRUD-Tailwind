import { useEffect, useState } from "react";
import { deleteFilme, getFilmes } from "../services/api";
import { Link } from "react-router-dom";


interface Filme {
    id: string,
    nome: string,
    genero: string,
    anoLancamento: number,
    notaCritica: number,
    imgUrl: string
}

function FilmeList() {

    const [filmes, setFilmes] = useState<Filme[]>([]);
    useEffect(() => {
        loadFilmes();
    }, []);

    const loadFilmes = async () => {
        const response = await getFilmes();
        setFilmes(response.data);
    };
    const handleDelete = async (id: string) => {
        await deleteFilme(id);
        loadFilmes();
    };

    return (
<div>
  <div>

    <div>

    </div>
  
    <div className="grid grid-cols-3 gap-8 m-16">
      
      {filmes.map((filme) => (
        
        <div key={filme.id} className="border-4 p-6 rounded-xl flex flex-col">
          
          <img 
            className="w-full h-auto rounded-lg mb-4" 
            src={filme.imgUrl} 
            alt="Here you deserve to see the movie poster, so something went wrong... Sorry :( " 
          />

          <div className="font-bold mb-4">
            {filme.nome.toUpperCase()} - {filme.notaCritica}
          </div>

          <div className="mt-auto">
            <button 
              className="bg-red-800 text-white px-2 py-1 m-2 rounded-lg
               hover:border-2 hover:border-b-slate-50 hover:scale-110" 
              onClick={() => handleDelete(filme.id)}>
              Delete
            </button>

            <Link 
              to={`/edit/${filme.id}`} 
              className="bg-amber-600 px-2 py-1  rounded-lg text-center
               hover:border-2 hover:border-b-slate-50 hover:text-xl">
              Edit
            </Link>

            <button 
              className="bg-blue-800 text-white px-2 py-1 m-2 
              rounded-lg hover:border-2 hover:border-b-slate-50 
              hover:scale-110">

              <Link to={`/view/${filme.id}`} className="block text-center">
                View
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    )
}

export default FilmeList;
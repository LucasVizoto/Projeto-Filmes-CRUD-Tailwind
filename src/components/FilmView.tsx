import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmeById } from "../services/api";

interface Filme {
  id: string;
  nome: string;
  genero: string;
  anoLancamento: number;
  notaCritica: number;
  imgUrl: string;
}

function FilmView() {
  const { id } = useParams<{ id: string }>();
  const [filme, setFilme] = useState<Filme | null>(null);

  useEffect(() => {
    if (id) {
      loadFilme();
    }
  }, [id]);

  const loadFilme = async () => {
    const response = await getFilmeById(id!);
    setFilme(response.data);
  };

  return (
    <div>
      {filme ? (
        <div className="m-12 mx-auto border-4 rounded-xl hover:scale-105 border-zinc-50 p-3 inline-block">
            {/* inline block deixa a borda rente ao conteúdo */}
          <h1 className="font-bold">{filme.nome.toUpperCase()}</h1>
          <div className="flex justify-center p-5">
          <img className="rounded-lg w-16 md:w-32 lg:w-48" src={filme.imgUrl} alt={"Imagem do filme"} />
          </div>
          <p><b>Gênero:</b> {filme.genero}</p>
          <p><b>Ano de Lançamento:</b> {filme.anoLancamento}</p>
          <p><b>Nota Crítica:</b> {filme.notaCritica}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default FilmView;

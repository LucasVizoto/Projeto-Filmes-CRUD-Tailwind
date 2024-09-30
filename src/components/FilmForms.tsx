import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { createFilme, getFilmeById, updateFilme } from "../services/api";

interface Filme{
    id: string,
    nome: string, 
    genero: string,
    anoLancamento: number,
    notaCritica: number,
    imgUrl: string
}

function FormFIlmes(){
    //para implementação de codigo do envio de formulario
    const {id} = useParams<{id:string}>();
    const navigate = useNavigate();
    const [filme, setFilme] = useState<Filme>({
        id: id || '',
        nome: '',
        genero: '',
        anoLancamento: 0,
        notaCritica: 0,
        imgUrl: ''
    });
    useEffect(()=>{
        if(id){
            loadFIlme();
        }
    },[id]);

    const loadFIlme = async()=>{
        try{
            const response = await getFilmeById(id as string);
            setFilme(response.data);
        }catch(err){
            toast.error(`Something went wrong :(     ${err}`);
            alert(`Something went wrong :( ${err}`);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setFilme(
            {...filme, 
            [event.target.name]: event.target.value}
        );
    };

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        try{
            if(id){
                await updateFilme(id, filme);
            }else{
                await createFilme(filme);
            }
            navigate('/');
            toast.success('Filme salvo com sucesso!');
        } catch(err){
            toast.error(`Something went wrong when you try to save something :(     ${err}`);
            alert(`Something went wrong when you try to save something :( ${err}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label >Nome do Filme</label>
                <input 
                type="text" 
                name="nome" 
                placeholder="Nome do Filme" 
                value={filme.nome} 
                onChange={handleChange} />
            </div>

            <div>
                <label>Gênero do Filme</label>
                <input 
                type="text" 
                name="genero" 
                placeholder="Gênero do Filme" 
                value={filme.genero} 
                onChange={handleChange} />
            </div>

            <div>
                <label>Ano de Lançamento do Filme</label>
                <input 
                type="number" 
                name="anoLancamento" 
                placeholder="Ano de Lançamento" 
                value={filme.anoLancamento} 
                onChange={handleChange} />
            </div>

            <div>
                
                <label>Nota dos Criticos</label>
                <input 
                type="number" 
                name="notaCritica" 
                placeholder="Nota Critica" 
                value={filme.notaCritica} 
                onChange={handleChange} />
            </div>

            <div>
                <label>Url do cartaz do filme</label>
                <input 
                type="text" 
                name="imgUrl" 
                placeholder="URL da Imagem" 
                value={filme.imgUrl} 
                onChange={handleChange} />
            </div>

            <button type="submit">Save</button>   
        </form>
    )
}

export default FormFIlmes;
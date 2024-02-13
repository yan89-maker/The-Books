import { useState } from "react";
import {MdSearch} from "react-icons/md"; 
import styles from "./style.module.scss"; 

export const SearchForm = ({setSearch}) =>{
    const [value, setValue] = useState(""); 

    const submit = () =>{
        e.preventDefault(); 
        setSearch(value);
        setValue(""); 
    }

    return(
        <form className={styles.form} onSubmit={submit}>
            <input className="input-medium"   placeholder="Pesquisar..." type="text" value={value} onChange={(e) => setValue(e.target.value)} required/>
            <button className="btn" type="submit">
                <MdSearch size={21} />
            </button>
        </form>
    )
}


//  Aqui vamos criar um outro Estado para captuar o que o usuário digita. 

// Vamos criar uma função de submit para este formulário.

// preventDefault - para prevenir a reação padrão do html. 

// SetSearch - pegar o valor que está sendo  digitado pelo usuario (setSearch) e basicament armazenar como termo de busca. 

// SetValue("") - basicament limpar o estado após fazer a busca. 

//required - caso o usuario tente fazer uma busca vazia, não vai conseguir fazer porque está como required. 

// onSubmit= {submit} = pegar a função onSubmit, incluir no formulário e colocar dentro a função criada submit. 
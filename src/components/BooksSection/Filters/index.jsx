import { PriceFilters } from "./PriceFilters"
import { SearchForm } from "./SearchForm"
import { CategoryFilters } from "./SearchForm/CategoryFilters"
import styles from "./style.module.scss"; 


    export const FIlters = ({cleanFilters, setSearch,setCategory,min, setMin, max, setMax}) =>{
    return(
        <div className={styles.filterBox}>
            <SearchForm setSearch={setSearch}/> 
            <CategoryFilters setCategory={setCategory}/> 
            <PriceFilters min={min} setMin={setMin} max={max} setMax={setMax}/> 
            <button className="btn" onClick={cleanFilters}>Limpar filtro</button>
        </div>
    )
}

// Estamos recebendo a função cleanFilters como props aqui para que possa ser disparada como OnClick no button. 

// Vamos receber o SetCategory vindo atráves do FIlter do estado criado no BookSection, e vamos repassar para CategoryFilters como prop. 

//Estamos recebendo os props min, setMin, max, setMax vindo do bookSection e repassa todsos os props para denro de PriceFilters.
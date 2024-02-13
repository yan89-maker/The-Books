import { categories } from "../../../../../data/category"
import styles from "./style.module.scss"; 

export const CategoryFilters = ({setCategory}) =>{
    return(
        <div className= {styles.categoryFilters}>
            <h2 className="title2">Filtrar por categoria</h2>
            <ul>
               {categories.map(category => (
                <li className="paragraph"  key={category.id} onClick={() => setCategory(category.name)}>
                    {category.name}

                </li>
               ))}
               
               
            </ul>
        </div>
    )
}

// Vamos criar um map, e em cada li precisa de um key ou chave, a chave será o category.id, e dentro da li estará o nome da categoria que será o category.name. 

// Estamos recebendo de novo o setCategory até chegar no componente que eu preciso. quando for clicado com OnClick, vou dar um setCategory pegando o nome da categoria que eu quero. 
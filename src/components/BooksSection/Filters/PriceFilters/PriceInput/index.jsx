import styles from "./style.module.scss"; 

export const PriceInput = ({id, label, value, setValue }) =>{
    return(
        <div className={styles.inputBox}>
             <label className="label" htmlFor={id}>{label}</label>
                <input className="input-small" type="number" name={id} id={id} 
                value={value}  onChange={(e) => setValue (e.target.value) }     
                 min="1"
                />
         </div>
    )
}


// Vamos refaturar criando mais um componente index.jsx para que não fique repetitivo. 

// Temos que ver quais props precisamos receber que são importantes, neste caso o value que as vezes pode ser min, as vezes pode ser max. Também o setValue que as vezes pode ser Min, as vezes pode ser Max. 
// Mesmo coisa para o Id. 
// Para o label também como prop porque o texto que vai estar escrito varia igualmente. 
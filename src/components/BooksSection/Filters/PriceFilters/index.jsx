import { PriceInput } from "./PriceInput";
import styles from "./style.module.scss";

export const PriceFilters = ({min, setMin, max, setMax}) =>{
    return(
    <div className={styles.priceFilters}>
            <h2 className="title2">Filtrar por preço</h2>
            <PriceInput id="min" label="Mínimo (R$)" value={min} setValue={setMin}/>
             {/*Price Input recebe seus respectivos props.   */}
             <PriceInput id="min" label="Máximo (R$)" value={max} setValue={setMax}/>
    </div>
    ); 
};

            {/* O que estar embaixo foi refaturado com o código enxuto encima */}
            {/* <div> */}
            {/* <label className="label" htmlFor="min">Mínimo R$</label> */}
            {/* <input className="input-small" type="number" name="min" id="min"  */}
            {/* // value={min}  onChange={(e) => setMin (e.target.value) }      */}
            {/* //   min="1"/> */}
             {/* </div> */}
{/*  */}
             {/* <div> */}
                {/* <h3>Filtrar por preço</h3> */}
                {/* <label className="label" htmlFor="max">Máximo R$</label> */}
              {/* <input className="input-small" type="number" name="max" id="max"  */}
                {/* // value={max}  onChange={(e) => setMax (e.target.value) } */}
            {/* //  min="1" /> */}
             {/* </div> */}
    {/* </div> */}
 
{/*  */}
{/*  */}
{/* {/* // Recebemos aqui os props min, setMin, max, setMax para que possam ser utilizados na lógica de preço.  *}
{/*  */}
{/* {/* // Vamos utilizar o recursos de captura de valores como também o espelhamento. (value={min}  onChange={(e) => setMin (e.target.value) })   */

 // min ="1" -> atributo para exigir que se coloque no mínimo um valor, não existe livro que custe zero ou negativo, então colocando isso, ele barra qualquer valor que possa ser fornecido dessa maneira.  
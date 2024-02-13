import { Footer } from "../../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({children}) =>{
    return(
        <>
        <Header/> 
        <main>{children}</main>
        <Footer/> 
        </>
    );
};


// Componente criado que eu vou poder reutilizar caso este App precise escalar, escalibildade para mais páginas no futuro.


// Vamos utilizar o {children} para que eu consiga renderizar qualquer estrutura no interior dos componentes. 
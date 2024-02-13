import Logo from "../../assets/LogoBlue.svg"; 
import styles from "./style.module.scss";

export const Header = () =>{
    return(
        <header>
            <div className="container">

                <div className={styles.flexBox}>
            <img src={Logo} alt="Logo Books" />
                </div>

            </div>
        </header>
    )
}

// implementamos um div container para que o contéudo dentro tenha essa limitação de largura e se aplica o que foi criado dentro do grid.scss 

// incluimos mais uma div para podermos criar e utilizar o flex, e vamos chamar de flexbox. 
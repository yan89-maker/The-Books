import { BooksSection } from "../../components/BooksSection"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { TitleSection } from "../../components/TitleSection"

export const HomePage = () =>{
    return(
        <DefaultTemplate>
            <TitleSection/>
            <BooksSection/>
        </DefaultTemplate>
    )
}


// Pages vai centralizar as seções, e também Header and Footer
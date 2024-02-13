import { books } from "../../../data/books"
import { BookCard } from "./BookCard"

export const BooksList = ({search, bookList}) =>{
    return(
        <div>
            <span>Livros Listados: {bookList.length}</span>
            {search ? <p>Resultados de busca para: {search}</p> :null}

                {bookList.length > 0 ? (
                     <ul>
                     {bookList.map(book=>(
                     <BookCard key={book.id} book={book}/> 
                     ))}
                 </ul>
                ): (
                    <p>Nenhum resultado encontrado </p>
                )}  
        </div>
    )
}


// Vamos pegar o Books que eu acabei de criar na pasta Data, e fazer um map, e para cada livro(books) que eu tenho, vou querer renderizar um bookCard. 
//BookCard precisa de uma chave ou id por causa do map, e vou mandar o livro todo book={book} como prop para dentro do componente card para ser recebido de uma forma desestruturada para assim ser utilizado no própio componente BookCard. 

//BookList é recebido como prop e utilizado no map. estamos fazendo um map em bookList. 

// Vamos evoluir o bookList com uma renderização condicional usando um ternário. Se bookList tiver a length maior que 0, quer dizer que temos resultado ou esta exibindo a lista completa, neste caso vamos exibir a ul. Do contrário, vamos colocar um pequeno paragráfo avisando "Nenhum resultado encontrado"

// Recebemos o search como prop também, e fazemos outra renderização condicional. Se o search for verdadeiro, vou exibir um pequeno paragráfo "Resultado de busca para:{search} ",no contrário não vou exibir nada. 
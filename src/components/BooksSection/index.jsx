import { useState } from "react";
import { books } from "../../data/books";
import { BooksList } from "./BooksList"
import { FIlters } from "./Filters"

export const BooksSection = () =>{
    const [search, setSearch] =useState(""); 
    const [category, setCategory] =useState(""); 
    const [min, setMin] = useState(""); 
    const [max, setMax] = useState(""); 



    const booksResults = books.filter(book => {
        const searchFilter = 
        search === "" ? true: 
        book.name.toLowerCase().includes(search.toLowerCase()) || 
        book.category.toLowerCase().includes(search.toLowerCase());

        const categoryFilter =  category ==="" ? true :  book.category === category;

        const minPriceFilter = min === "" ? true : book.price > Number(min); 

        const maxPriceFilter = max === "" ? true : book.price <= Number(max); 

        return  searchFilter && categoryFilter && minPriceFilter && maxPriceFilter
       });
       // Estamos combinando todas as regras de filtragens combinadas. 



    // const bookList = search ? booksResults : books; 


    const cleanFilters = () =>{
        setSearch ("");
        setCategory(""); 
        setMin("");
        setMax(""); 

        // Limpeza do Search, Category, setMin e SetMax em uma string vazia. 
    };

    return(
        <section>
            <div className="container">
            <FIlters 
            cleanFilters = {cleanFilters}
            setSearch={setSearch} 
            setCategory={setCategory}/> 
            min={min}
            setMin={setMin}
            max={max}
            setMax={setMax}
            <BooksList search={search} bookList = {booksResults}/> 
            </div>
        </section>
    )
    }

// Vamos criar o Estado, useState no BooksSection para que possamos utilizar em ambos componentes, Filters e BooksList via prop caso se faça necessário. 

// useState = Basicament vai definir para mim o que que eu estou buscanod naquele respectivo momento. 


// booksResult = filtro dos books, quero retornar somente os livros ao principio que vão corresponder com os termos de busca, e também verificar se o nome inclui(includes) o termo de busca. vamos converter tudo para lowercase o nome do livro, bem como o termo de busca. || Criamos uma opção de fazer a mesma busca também com as nossas queridas amigas categorias. 


// const bookList = condição para renderizar livros ou renderizar os resultados propiamente dito. se tivermos uma busca, queremos exibir os resultados de busca, con contário queremos exibir a lista completa. 

// Mandamos o bookList como prop para dentro der BooksList. 

// Vamos passar o search={search} para a BookList. 

// Vamos criar uma função de cleanFilters, aonde vou resetar a busca com setSearch (""), e vou passar a funçaço cleanfilters dentro de FIlters para que possamos usar no Filters e utilizar a função no botão. estamos mandando como props. 

// Primeiro passo é saber qual categoria eu quero filtrar, então vamos criar um estado. vamos mandar o setCategory={setCategory} dentro do FIlters 

// Vamos criar uma nova regra de filtragem para categoria usando ternário, e combinar com a nossa própia regra de busca já criada anteriormente. 

// Vamos criar uma seção ternária para o search. search === "" ? true: . Com isso, não enviamos mais bookList, e sim booksResults dentro do BooksList. 

// Vamos evoluir a limpeza colocando  setCategory("");  como vazio no cleanFilters. 

// Estamos adicionando um novo estado para o filtro de preço.  
// const [min, setMin] = useState("");   /     const [max, setMax] = useState("");


// Estamos criando uma nova regra de filtragem const priceFilter

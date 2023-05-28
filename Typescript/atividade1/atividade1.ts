type Livro = {
    nome: string;
    preco: number;
    categoria: string;
}

let livros: Livro[] = [{
    nome: "Anne de Green Gables",
    preco: 18.90,
    categoria: "Literatura Infantil"
},
{
    nome: "Anne de Avonlea",
    preco: 18.90,
    categoria: "Literatura Infantil"
},
{
    nome: "Anne da Ilha",
    preco: 18.90,
    categoria: "Literatura Infantil"
}];

for (let livro of livros) {
    console.log(`Nome: ${livro["nome"]}`);
    console.log(`Preço: ${livro["preco"]}`);
    console.log(`Categoria: ${livro["categoria"]}\n`);
}

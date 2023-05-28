enum categoria {
    romance = "Romance",
    infantil = "Literatura Infantil"
}

type Livro = {
    nome: string;
    preco: number;
    categoria?: categoria;
}

let livros: Livro[] = [{
    nome: "Anne de Green Gables",
    preco: 18.90,
    categoria: categoria.infantil
},
{
    nome: "Anne de Avonlea",
    preco: 18.90,
},
{
    nome: "Anne",
    preco: 18.90,
    categoria: categoria.romance
}];

for (let livro of livros) {
    if(livro.nome.split(" ").length === 1){
        console.log(`Nome: ${livro.nome.toUpperCase()}`);
    }else{
        console.log(`Nome: ${livro.nome}`);
    }
    console.log(`Preço: ${livro.preco}`);
    console.log(`Categoria: ${livro.categoria}\n`);
}

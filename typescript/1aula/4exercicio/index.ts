enum categoria {
    romance = "Romance",
    infantil = "Literatura Infantil"
}

type Livro = {
    titulo: string;
    preco: number;
    categoria?: categoria;
}

type Autor = {
    nome: string;
}

let livros: Livro[] = [{
    titulo: "Anne de Green Gables",
    preco: 18.90,
    categoria: categoria.infantil
},
{
    titulo: "Anne de Avonlea",
    preco: 18.90,
},
{
    titulo: "Anne",
    preco: 18.90,
    categoria: categoria.romance
}];

type bibliotecas = "biblioteca1" | "biblioteca2" | "biblioteca3";
type map = { [biblioteca in bibliotecas]: Livro};
let mapVar: map = { biblioteca1: livros[0], biblioteca2: livros[1], biblioteca3: livros[2]};
console.log("LIVROS DA BIBLIOTECA 1");
console.log(`titulo: ${mapVar.biblioteca1.titulo}`);
console.log(`Preço: ${mapVar.biblioteca1.preco}`);
console.log(`Categoria: ${mapVar.biblioteca1.categoria}\n`);
console.log("LIVROS DA BIBLIOTECA 2");
console.log(`titulo: ${mapVar.biblioteca2.titulo}`);
console.log(`Preço: ${mapVar.biblioteca2.preco}`);
console.log(`Categoria: ${mapVar.biblioteca2.categoria}\n`);
console.log("LIVROS DA BIBLIOTECA 3");
console.log(`titulo: ${mapVar.biblioteca3.titulo}`);
console.log(`Preço: ${mapVar.biblioteca3.preco}`);
console.log(`Categoria: ${mapVar.biblioteca3.categoria}\n`);


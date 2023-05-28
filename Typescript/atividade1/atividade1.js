var livros = [{
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
for (var _i = 0, livros_1 = livros; _i < livros_1.length; _i++) {
    var livro = livros_1[_i];
    console.log("Nome: ".concat(livro["nome"]));
    console.log("Pre\u00E7o: ".concat(livro["preco"]));
    console.log("Categoria: ".concat(livro["categoria"], "\n"));
}

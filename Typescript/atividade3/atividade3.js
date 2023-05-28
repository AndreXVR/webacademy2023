var categoria;
(function (categoria) {
    categoria["romance"] = "Romance";
    categoria["infantil"] = "Literatura Infantil";
})(categoria || (categoria = {}));
var livros = [{
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
for (var _i = 0, livros_1 = livros; _i < livros_1.length; _i++) {
    var livro = livros_1[_i];
    if (livro.nome.split(" ").length === 1) {
        console.log("Nome: ".concat(livro.nome.toUpperCase()));
    }
    else {
        console.log("Nome: ".concat(livro.nome));
    }
    console.log("Pre\u00E7o: ".concat(livro.preco));
    console.log("Categoria: ".concat(livro.categoria, "\n"));
}

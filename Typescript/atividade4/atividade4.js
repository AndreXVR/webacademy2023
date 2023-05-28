var categoria;
(function (categoria) {
    categoria["romance"] = "Romance";
    categoria["infantil"] = "Literatura Infantil";
})(categoria || (categoria = {}));
var livros = [{
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
var mapVar = { biblioteca1: livros[0], biblioteca2: livros[1], biblioteca3: livros[2] };
console.log("LIVROS DA BIBLIOTECA 1");
console.log("titulo: ".concat(mapVar.biblioteca1.titulo));
console.log("Pre\u00E7o: ".concat(mapVar.biblioteca1.preco));
console.log("Categoria: ".concat(mapVar.biblioteca1.categoria, "\n"));
console.log("LIVROS DA BIBLIOTECA 2");
console.log("titulo: ".concat(mapVar.biblioteca2.titulo));
console.log("Pre\u00E7o: ".concat(mapVar.biblioteca2.preco));
console.log("Categoria: ".concat(mapVar.biblioteca2.categoria, "\n"));
console.log("LIVROS DA BIBLIOTECA 3");
console.log("titulo: ".concat(mapVar.biblioteca3.titulo));
console.log("Pre\u00E7o: ".concat(mapVar.biblioteca3.preco));
console.log("Categoria: ".concat(mapVar.biblioteca3.categoria, "\n"));

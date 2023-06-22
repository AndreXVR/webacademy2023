const http = require("http");
const PORT = 3000;
const servidor = http.createServer((req, res) => {
    res.end("<h1> Use Docker, gostoso demais.</h1>");
});

servidor.listen(
    PORT,
    () => console.log(`Servidor rodando na porta ${PORT}.`)
);
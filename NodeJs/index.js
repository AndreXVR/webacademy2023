const http = require("http");

const PORT = 3333;

const server = http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"})
    res.end("Instituto de Computação");
})
server.listen(PORT, () =>{
    console.log(`Rodando na porta ${PORT}`);
})
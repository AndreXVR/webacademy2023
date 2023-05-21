const http = require("http");
const fs= require("fs");
const {toUpper,createLink} = require('./utils');
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const server = http.createServer((req,res) =>{
    console.log(req.url);
    if(req.url == "/"){
        fs.readdir(folder,(err,files) =>{
            if (err){
                console.log(err);
            } 
            else{
                res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"})
                files.forEach(f => res.write(createLink(f)));
                res.end();
            }
        });
    }else if (req.url != "/favicon.ico"){
        fs.readFile(`${folder}/${req.url}`,(err,output) => {
            if (err){
                console.log(err);
            } 
            else{
                res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"})
                res.write("<a href='/'>Voltar</a><br>");
                res.write(output);
                res.end();
            }
        });
    }
})
server.listen(PORT, () =>{
    console.log(`Rodando na porta ${PORT}`);
})
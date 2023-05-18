import http from "http";
import fs from "fs";
import {toUpper,createLink} from './utils';
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const server = http.createServer((req,res) =>{
    console.log(req.url);
    if(req.url == "/"){
        fs.readdir(folder,(err,files) =>{
            if (err) console.log(err);
            else{
                res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"})
                files.forEach(f => res.write(createLink(f)));
                res.end(toUpper("Instituto de Computação"));
            }
        });
    }else{
        fs.readFile(`${folder}/${req.url}`,(err,output) => {
            res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"})
            res.write("<a href='/'>Voltar</a><br>");
            res.write(output);
            res.end(toUpper("Instituto de Computação"));
        });
    }
})
server.listen(PORT, () =>{
    console.log(`Rodando na porta ${PORT}`);
})
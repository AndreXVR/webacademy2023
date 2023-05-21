import http from "http";
import fs from "fs";
import utils from './utils';
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
                files.forEach(f => res.write(utils.createLink(f)));
                res.end(utils.toUpper("Instituto de Computação"));
            }
        });
    }else if (req.url != "/favicon.ico"){
        fs.readFile(`${folder}/${req.url}`,(err,output) => {
            res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"})
            res.write(utils.createVoltar());
            res.write(output);
            res.end(utils.toUpper("Instituto de Computação"));
        });
    }
})

server.listen(PORT, () =>{
    console.log(`Rodando na porta ${PORT}`);
})
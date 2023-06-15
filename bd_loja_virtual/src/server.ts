import express from "express";
import {clientesRouter} from "./routes/Clientes.routes";
import {produtosRouter} from "./routes/Produtos.routes";
import {categoriasRouter} from "./routes/Categorias.routes";
import {vendasRouter} from "./routes/Vendas.routes";

const routes = [
    clientesRouter,
    produtosRouter,
    categoriasRouter,
    vendasRouter
]

export class Api{
public server: express.Application;
constructor(){
 this.server = express();
 this.middleware();
 this.router();
 }
 private middleware(){
 this.server.use(express.json());
 }
private router(){
 this.server.use(routes);
 }
}
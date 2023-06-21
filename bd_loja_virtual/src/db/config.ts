import { Sequelize } from "sequelize-typescript";
//import { Vendas } from "../models/Vendas";
//import { Produtos } from "../models/Produtos";
//import { Clientes } from "../models/Clientes";
//import { Categorias } from "../models/Categorias";
const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "loja_user",
    password: "loja123",
    database: "loja",
    logging: false,
    //models: [Clientes, Categorias, Produtos, Vendas],
});
export default connection;
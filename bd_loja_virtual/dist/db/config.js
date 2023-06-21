"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
//import { Vendas } from "../models/Vendas";
//import { Produtos } from "../models/Produtos";
//import { Clientes } from "../models/Clientes";
//import { Categorias } from "../models/Categorias";
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "loja_user",
    password: "loja123",
    database: "loja",
    logging: false,
    //models: [Clientes, Categorias, Produtos, Vendas],
});
exports.default = connection;

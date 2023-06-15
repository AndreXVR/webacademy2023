"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Vendas_1 = require("../models/Vendas");
const Produtos_1 = require("../models/Produtos");
const Clientes_1 = require("../models/Clientes");
const Categorias_1 = require("../models/Categorias");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "loja_user",
    password: "loja123",
    database: "loja",
    logging: false,
    models: [Clientes_1.Clientes, Categorias_1.Categorias, Produtos_1.Produtos, Vendas_1.Vendas],
});
exports.default = connection;

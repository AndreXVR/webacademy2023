"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "myuser",
    password: "1234",
    database: "empresa",
    logging: false,
    //models: [Funcionarios, Departamentos, Projetos, Dependentes],
});
exports.default = connection;

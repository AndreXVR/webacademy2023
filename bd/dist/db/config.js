"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Funcionarios_1 = require("../models/Funcionarios");
const Departamentos_1 = require("../models/Departamentos");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "myuser",
    password: "1234",
    database: "webacademydb",
    logging: false,
    models: [Funcionarios_1.Funcionarios, Departamentos_1.Departamentos],
});
exports.default = connection;

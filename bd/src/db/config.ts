import { Sequelize } from "sequelize-typescript";
import { Funcionarios } from "../models/Funcionarios";
import { Departamentos } from "../models/Departamentos";
import { Projetos } from "../models/Projetos";
import { Dependentes } from "../models/Dependentes";
const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "myuser",
    password: "1234",
    database: "webacademydb",
    logging: false,
    //models: [Funcionarios, Departamentos, Projetos, Dependentes],
});
export default connection;
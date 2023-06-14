import { Sequelize } from "sequelize-typescript";
import { Funcionarios } from "../models/Funcionarios";
import { Departamentos } from "../models/Departamentos";
const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "myuser",
    password: "1234",
    database: "webacademydb",
    logging: false,
    models: [Funcionarios],
});
export default connection;
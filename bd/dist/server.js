"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const express_1 = __importDefault(require("express"));
const Funcionarios_routes_1 = require("./routes/Funcionarios.routes");
const Departamentos_routes_1 = require("./routes/Departamentos.routes");
const routes = [
    Funcionarios_routes_1.funcionariosRouter,
    Departamentos_routes_1.departamentosRouter
];
class Api {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleware();
        this.router();
    }
    middleware() {
        this.server.use(express_1.default.json());
    }
    router() {
        this.server.use(routes);
    }
}
exports.Api = Api;

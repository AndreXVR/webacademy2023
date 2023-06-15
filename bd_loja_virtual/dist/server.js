"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const express_1 = __importDefault(require("express"));
const Clientes_routes_1 = require("./routes/Clientes.routes");
const Produtos_routes_1 = require("./routes/Produtos.routes");
const Categorias_routes_1 = require("./routes/Categorias.routes");
const Vendas_routes_1 = require("./routes/Vendas.routes");
const routes = [
    Clientes_routes_1.clientesRouter,
    Produtos_routes_1.produtosRouter,
    Categorias_routes_1.categoriasRouter,
    Vendas_routes_1.vendasRouter
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

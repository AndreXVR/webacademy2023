"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientesRouter = void 0;
const express_1 = require("express");
const Clientes_1 = require("../models/Clientes");
const clientesRouter = (0, express_1.Router)();
exports.clientesRouter = clientesRouter;
clientesRouter.get("/Clientes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosClientes = yield Clientes_1.Clientes.findAll();
    return res.status(200).json(todosClientes);
}));
clientesRouter.get("/Clientes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield Clientes_1.Clientes.findByPk(id);
    return res.status(200).json(cliente);
}));
clientesRouter.post("/Clientes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cliente = yield Clientes_1.Clientes.create(Object.assign({}, req.body));
    return res.status(201).json(cliente);
}));
clientesRouter.put("/Clientes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Clientes_1.Clientes.update(Object.assign({}, req.body), { where: { id } });
    const updatedCliente = yield Clientes_1.Clientes.findByPk(id);
    return res.status(200).json(updatedCliente);
}));
clientesRouter.delete("/Clientes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedCliente = yield Clientes_1.Clientes.findByPk(id);
    yield Clientes_1.Clientes.destroy({ where: { id } });
    return res.status(200).json(deletedCliente);
}));

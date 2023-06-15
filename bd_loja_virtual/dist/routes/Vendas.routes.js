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
exports.vendasRouter = void 0;
const express_1 = require("express");
const Vendas_1 = require("../models/Vendas");
const vendasRouter = (0, express_1.Router)();
exports.vendasRouter = vendasRouter;
vendasRouter.get("/vendas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosVendas = yield Vendas_1.Vendas.findAll();
    return res.status(200).json(todosVendas);
}));
vendasRouter.get("/vendas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const venda = yield Vendas_1.Vendas.findByPk(id);
    return res.status(200).json(venda);
}));
vendasRouter.post("/vendas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const venda = yield Vendas_1.Vendas.create(Object.assign({}, req.body));
    return res.status(201).json(venda);
}));
vendasRouter.put("/vendas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Vendas_1.Vendas.update(Object.assign({}, req.body), { where: { id } });
    const updatedVenda = yield Vendas_1.Vendas.findByPk(id);
    return res.status(200).json(updatedVenda);
}));
vendasRouter.delete("/vendas/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedVenda = yield Vendas_1.Vendas.findByPk(id);
    yield Vendas_1.Vendas.destroy({ where: { id } });
    return res.status(200).json(deletedVenda);
}));

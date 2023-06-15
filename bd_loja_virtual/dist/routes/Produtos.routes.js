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
exports.produtosRouter = void 0;
const express_1 = require("express");
const Produtos_1 = require("../models/Produtos");
const produtosRouter = (0, express_1.Router)();
exports.produtosRouter = produtosRouter;
produtosRouter.get("/produtos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosProdutos = yield Produtos_1.Produtos.findAll();
    return res.status(200).json(todosProdutos);
}));
produtosRouter.get("/produtos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const produto = yield Produtos_1.Produtos.findByPk(id);
    return res.status(200).json(produto);
}));
produtosRouter.post("/produtos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const produto = yield Produtos_1.Produtos.create(Object.assign({}, req.body));
    return res.status(201).json(produto);
}));
produtosRouter.put("/produtos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Produtos_1.Produtos.update(Object.assign({}, req.body), { where: { id } });
    const updatedProduto = yield Produtos_1.Produtos.findByPk(id);
    return res.status(200).json(updatedProduto);
}));
produtosRouter.delete("/produtos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedProduto = yield Produtos_1.Produtos.findByPk(id);
    yield Produtos_1.Produtos.destroy({ where: { id } });
    return res.status(200).json(deletedProduto);
}));

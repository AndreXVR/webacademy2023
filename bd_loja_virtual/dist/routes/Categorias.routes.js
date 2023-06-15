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
exports.categoriasRouter = void 0;
const express_1 = require("express");
const Categorias_1 = require("../models/Categorias");
const categoriasRouter = (0, express_1.Router)();
exports.categoriasRouter = categoriasRouter;
categoriasRouter.get("/categorias", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosCategorias = yield Categorias_1.Categorias.findAll();
    return res.status(200).json(todosCategorias);
}));
categoriasRouter.get("/categorias/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield Categorias_1.Categorias.findByPk(id);
    return res.status(200).json(categoria);
}));
categoriasRouter.post("/categorias", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield Categorias_1.Categorias.create(Object.assign({}, req.body));
    return res.status(201).json(categoria);
}));
categoriasRouter.put("/categorias/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Categorias_1.Categorias.update(Object.assign({}, req.body), { where: { id } });
    const updatedCategoria = yield Categorias_1.Categorias.findByPk(id);
    return res.status(200).json(updatedCategoria);
}));
categoriasRouter.delete("/categorias/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedCategoria = yield Categorias_1.Categorias.findByPk(id);
    yield Categorias_1.Categorias.destroy({ where: { id } });
    return res.status(200).json(deletedCategoria);
}));

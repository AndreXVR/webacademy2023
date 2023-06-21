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
exports.funcionariosRouter = void 0;
const express_1 = require("express");
const Funcionarios_1 = require("../models/Funcionarios");
const Dependentes_1 = require("../models/Dependentes");
const Departamentos_1 = require("../models/Departamentos");
const funcionariosRouter = (0, express_1.Router)();
exports.funcionariosRouter = funcionariosRouter;
funcionariosRouter.get("/funcionarios", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todosFuncionarios = yield Funcionarios_1.Funcionarios.findAndCountAll({
        include: [
            Dependentes_1.Dependentes,
            Departamentos_1.Departamentos
        ],
        distinct: true
    });
    return res.status(200).json(todosFuncionarios);
}));
funcionariosRouter.get("/funcionarios/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const funcionario = yield Funcionarios_1.Funcionarios.findByPk(id);
    return res.status(200).json(funcionario);
}));
funcionariosRouter.post("/funcionarios", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const funcionario = yield Funcionarios_1.Funcionarios.create(Object.assign({}, req.body));
    return res.status(201).json(funcionario);
}));
funcionariosRouter.put("/funcionarios/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Funcionarios_1.Funcionarios.update(Object.assign({}, req.body), { where: { id } });
    const updatedFuncionario = yield Funcionarios_1.Funcionarios.findByPk(id);
    return res.status(200).json(updatedFuncionario);
}));
funcionariosRouter.delete("/funcionarios/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedFuncionario = yield Funcionarios_1.Funcionarios.findByPk(id);
    yield Funcionarios_1.Funcionarios.destroy({ where: { id } });
    return res.status(200).json(deletedFuncionario);
}));

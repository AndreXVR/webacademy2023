import { Router } from "express";
import { Request, Response } from "express";
import { Funcionarios } from "../models/Funcionarios";
import { Dependentes } from "../models/Dependentes";
import { Departamentos } from "../models/Departamentos";

const funcionariosRouter: Router = Router();

funcionariosRouter.get("/funcionarios", async (req: Request, res: Response):
Promise<Response> => {
 const todosFuncionarios = await Funcionarios.findAndCountAll({
    include: [
        Dependentes,
        Departamentos
    ],
    distinct:true
 });
 return res.status(200).json(todosFuncionarios.rows);
});

funcionariosRouter.get("/funcionarios/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const funcionario: Funcionarios | null = await Funcionarios.findByPk(id);
 return res.status(200).json(funcionario);
});

funcionariosRouter.post("/funcionarios", async (req: Request, res: Response):
Promise<Response> => {
 const funcionario: Funcionarios = await Funcionarios.create({ ...req.body });
 return res.status(201).json(funcionario);
});

funcionariosRouter.put("/funcionarios/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 await Funcionarios.update({ ...req.body }, { where: { id } });
 const updatedFuncionario: Funcionarios | null = await Funcionarios.findByPk(id);
 return res.status(200).json(updatedFuncionario);
});

funcionariosRouter.delete("/funcionarios/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const deletedFuncionario: Funcionarios | null = await Funcionarios.findByPk(id);
 await Funcionarios.destroy({ where: { id } });
 return res.status(200).json(deletedFuncionario);
 }
);

export {funcionariosRouter};
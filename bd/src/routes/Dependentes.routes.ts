import { Router } from "express";
import { Request, Response } from "express";
import { Funcionarios } from "../models/Funcionarios";
import { Dependentes } from "../models/Dependentes";
import { Departamentos } from "../models/Departamentos";

const dependentesRouter: Router = Router();

dependentesRouter.get("/dependentes", async (req: Request, res: Response):
Promise<Response> => {
 const todosDependentes: Dependentes[] = await Dependentes.findAll();
 return res.status(200).json(todosDependentes);
});

dependentesRouter.get("/dependentes/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const dependente: Dependentes | null = await Dependentes.findByPk(id);
 return res.status(200).json(dependente);
});

dependentesRouter.get("/dependentes/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const dependente: Dependentes[] | null = await Dependentes.findAll({
    where: {
        funcionarioId: id,
    },
 });
 return res.status(200).json(dependente);
});

dependentesRouter.post("/dependentes", async (req: Request, res: Response):
Promise<Response> => {
 const dependente: Dependentes = await Dependentes.create({ ...req.body });
 return res.status(201).json(dependente);
});

dependentesRouter.put("/dependentes/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 await Dependentes.update({ ...req.body }, { where: { id } });
 const updatedDependente: Dependentes | null = await Dependentes.findByPk(id);
 return res.status(200).json(updatedDependente);
});

dependentesRouter.delete("/dependentes/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const deletedDependente: Dependentes | null = await Dependentes.findByPk(id);
 await Dependentes.destroy({ where: { id } });
 return res.status(200).json(deletedDependente);
 }
);

export {dependentesRouter};
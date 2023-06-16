import { Router } from "express";
import { Request, Response } from "express";
import { Projetos } from "../models/Projetos";
import { Dependentes } from "../models/Dependentes";
import { Departamentos } from "../models/Departamentos";

const projetosRouter: Router = Router();

projetosRouter.get("/projetos", async (req: Request, res: Response):
Promise<Response> => {
 const todosProjetos = await Projetos.findAndCountAll({
    include: [
        Dependentes,
        Departamentos
    ],
    distinct:true
 });
 return res.status(200).json(todosProjetos.rows);
});

projetosRouter.get("/projetos/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const projeto: Projetos | null = await Projetos.findByPk(id);
 return res.status(200).json(projeto);
});

projetosRouter.post("/projetos", async (req: Request, res: Response):
Promise<Response> => {
 const projeto: Projetos = await Projetos.create({ ...req.body });
 return res.status(201).json(projeto);
});

projetosRouter.put("/projetos/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 await Projetos.update({ ...req.body }, { where: { id } });
 const updatedProjeto: Projetos | null = await Projetos.findByPk(id);
 return res.status(200).json(updatedProjeto);
});

projetosRouter.delete("/projetos/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const deletedProjeto: Projetos | null = await Projetos.findByPk(id);
 await Projetos.destroy({ where: { id } });
 return res.status(200).json(deletedProjeto);
 }
);

export {projetosRouter};
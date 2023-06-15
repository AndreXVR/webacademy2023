import { Router } from "express";
import { Request, Response } from "express";
import { Funcionarios } from "../models/Funcionarios";

const funcionariosRouter: Router = Router();

funcionariosRouter.get("/funcionarios", async (req: Request, res: Response):
Promise<Response> => {
 const funcionarios: Funcionarios[] = await Funcionarios.findAll();
 return res.status(200).json(funcionarios);
});

funcionariosRouter.post("/funcionarios", async (req: Request, res: Response):
Promise<Response> => {
 const departamento: Funcionarios = await Funcionarios.create({ ...req.body });
 return res.status(201).json(departamento);
});


export {funcionariosRouter};
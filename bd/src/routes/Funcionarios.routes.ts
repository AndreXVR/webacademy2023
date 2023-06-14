import { Router } from "express";
import { Request, Response } from "express";
import { Funcionarios } from "../models/Funcionarios";

const funcionariosRouter: Router = Router();

funcionariosRouter.get("/funcionarios", async (req: Request, res: Response):
Promise<Response> => {
 const funcionarios: Funcionarios[] = await Funcionarios.findAll();
 return res.status(200).json(funcionarios);
});
export {funcionariosRouter};
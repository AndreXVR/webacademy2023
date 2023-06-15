import { Router } from "express";
import { Request, Response } from "express";
import { Categorias } from "../models/Categorias";

const categoriasRouter: Router = Router();

categoriasRouter.get("/categorias", async (req: Request, res: Response):
Promise<Response> => {
 const todosCategorias: Categorias[] = await Categorias.findAll();
 return res.status(200).json(todosCategorias);
});

categoriasRouter.get("/categorias/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const categoria: Categorias | null = await Categorias.findByPk(id);
 return res.status(200).json(categoria);
});

categoriasRouter.post("/categorias", async (req: Request, res: Response):
Promise<Response> => {
 const categoria: Categorias = await Categorias.create({ ...req.body });
 return res.status(201).json(categoria);
});

categoriasRouter.put("/categorias/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 await Categorias.update({ ...req.body }, { where: { id } });
 const updatedCategoria: Categorias | null = await Categorias.findByPk(id);
 return res.status(200).json(updatedCategoria);
});

categoriasRouter.delete("/categorias/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const deletedCategoria: Categorias | null = await Categorias.findByPk(id);
 await Categorias.destroy({ where: { id } });
 return res.status(200).json(deletedCategoria);
 }
);

export {categoriasRouter};
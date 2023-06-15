import { Router } from "express";
import { Request, Response } from "express";
import { Produtos } from "../models/Produtos";

const produtosRouter: Router = Router();

produtosRouter.get("/produtos", async (req: Request, res: Response):
Promise<Response> => {
 const todosProdutos: Produtos[] = await Produtos.findAll();
 return res.status(200).json(todosProdutos);
});

produtosRouter.get("/produtos/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const produto: Produtos | null = await Produtos.findByPk(id);
 return res.status(200).json(produto);
});

produtosRouter.post("/produtos", async (req: Request, res: Response):
Promise<Response> => {
 const produto: Produtos = await Produtos.create({ ...req.body });
 return res.status(201).json(produto);
});

produtosRouter.put("/produtos/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 await Produtos.update({ ...req.body }, { where: { id } });
 const updatedProduto: Produtos | null = await Produtos.findByPk(id);
 return res.status(200).json(updatedProduto);
});

produtosRouter.delete("/produtos/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const deletedProduto: Produtos | null = await Produtos.findByPk(id);
 await Produtos.destroy({ where: { id } });
 return res.status(200).json(deletedProduto);
 }
);

export {produtosRouter};
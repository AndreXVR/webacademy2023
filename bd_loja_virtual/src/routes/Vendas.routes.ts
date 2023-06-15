import { Router } from "express";
import { Request, Response } from "express";
import { Vendas } from "../models/Vendas";

const vendasRouter: Router = Router();

vendasRouter.get("/vendas", async (req: Request, res: Response):
Promise<Response> => {
 const todosVendas: Vendas[] = await Vendas.findAll();
 return res.status(200).json(todosVendas);
});

vendasRouter.get("/vendas/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const venda: Vendas | null = await Vendas.findByPk(id);
 return res.status(200).json(venda);
});

vendasRouter.post("/vendas", async (req: Request, res: Response):
Promise<Response> => {
 const venda: Vendas = await Vendas.create({ ...req.body });
 return res.status(201).json(venda);
});

vendasRouter.put("/vendas/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 await Vendas.update({ ...req.body }, { where: { id } });
 const updatedVenda: Vendas | null = await Vendas.findByPk(id);
 return res.status(200).json(updatedVenda);
});

vendasRouter.delete("/vendas/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const deletedVenda: Vendas | null = await Vendas.findByPk(id);
 await Vendas.destroy({ where: { id } });
 return res.status(200).json(deletedVenda);
 }
);

export {vendasRouter};
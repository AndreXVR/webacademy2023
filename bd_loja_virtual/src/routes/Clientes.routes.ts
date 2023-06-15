import { Router } from "express";
import { Request, Response } from "express";
import { Clientes } from "../models/Clientes";

const clientesRouter: Router = Router();

clientesRouter.get("/Clientes", async (req: Request, res: Response):
Promise<Response> => {
 const todosClientes: Clientes[] = await Clientes.findAll();
 return res.status(200).json(todosClientes);
});

clientesRouter.get("/Clientes/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const cliente: Clientes | null = await Clientes.findByPk(id);
 return res.status(200).json(cliente);
});

clientesRouter.post("/Clientes", async (req: Request, res: Response):
Promise<Response> => {
 const cliente: Clientes = await Clientes.create({ ...req.body });
 return res.status(201).json(cliente);
});

clientesRouter.put("/Clientes/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 await Clientes.update({ ...req.body }, { where: { id } });
 const updatedCliente: Clientes | null = await Clientes.findByPk(id);
 return res.status(200).json(updatedCliente);
});

clientesRouter.delete("/Clientes/:id", async (req: Request, res: Response):
Promise<Response> => {
 const { id } = req.params;
 const deletedCliente: Clientes | null = await Clientes.findByPk(id);
 await Clientes.destroy({ where: { id } });
 return res.status(200).json(deletedCliente);
 }
);

export {clientesRouter};
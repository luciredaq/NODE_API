import { create } from "domain";
import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
    getAll: (req: Request, res: Response) => {
        res.json(userService.findAll())
    },
    getById: (req: Request, res: Response) => {
        const user = userService.findById(Number(req.params.id))
        user ? res.json(user) : res.status(404).json({ message: "Usuario nao encontrado" })
    },
    create: (req: Request, res: Response) => {
        const { name, email } = req.body
        const user = userService.create(name, email)
        res.status(201).json(user)
    },
    update: (req: Request, res: Response) => {
        const { name, email } = req.body
        const user = userService.update(Number(req.params.id), name, email)
        user ? res.json(user) : res.status(404).json({ message: "Usuario nao encontrado" })
    },
    delete: (req: Request, res: Response) => {
        const success = userService.delete(Number(req.params.id))
        success ? res.json({ message: "Usuario removido com sucesso" }) : res.status(404).
            json({ message: "usuario nao encontrado" })
    },
}
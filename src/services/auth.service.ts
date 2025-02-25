import { Request, Response, NextFunction} from "express";
import dotenv from 'dotenv'
import { RequestHandler } from "express-serve-static-core";

dotenv.config()

export const authenticate: RequestHandler = (req, res, next): any => {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    if(!token){
        return res.status(401).json({message: "Acesso negado"})
    }

    if(token !== process.env.JWT){
        return res.status(403).json({message:"token invalido"})
    }
    next()
}
    

import { User } from "../models/user.model";
import { db } from "../config/database";

let users: User[] = []
let idCounter = 1;

export const userService = {
    findAll: async (): Promise<User[]> => {
        return db('users').select("*")
    },

    findById: async (id: number): Promise<User | undefined> => {
        return db('users').where({id}).first()
    },
    create: async (name: string, email: string): Promise<User> => {
        try{
            const [id] = await db("users").insert({name, email})
            return await db('users').where({id}).first()
        }catch(error: any){
            if(error.code == "ER_DUMP_ENTRY"){
                throw new Error("Usuario ja existe")
            }
            throw new Error("Erro ao criar o usuario")
        }
    },
    
    update: async (id:number, name:string, email:string) : Promise<User | null> => {
        const update = await db('users').where({id}).update({name, email})
        return update ? await db('users').where({id}).first(): null
    },
    delete: async (id: number) : Promise<boolean> => {
        const deleted = await db('users').where({id}).delete()
        return deleted > 0
    }
}

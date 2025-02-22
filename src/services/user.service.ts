import { User } from "../models/user.model";

let users: User[] = []
let idCounter = 1;

export const userService = {
    findAll: (): User[] => users,
    findById: (id: number): User | undefined => users.find(user => user.id === id),
    create: (name: string, email: string): User => {
        const newUser: User = { id: idCounter++, name, email }
        users.push(newUser)
        return newUser
    },
    update: (id: number, name:string, email:string): User | null => {
        const user = users.find(u => u.id === id)
        if(!user){
            return null
        }
        user.name = name
        user.email = email
        return user
    },
    delete: (id:number): boolean => {
        const index = users.findIndex(u => u.id === id)
        if(index === -1){
            return false
        }
        users.splice(index,1)
        return true
    }
}
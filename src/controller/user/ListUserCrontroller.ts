import { Request, Response } from "express";

class ListUsersController {
    async handle(request: Request, response: Response) {    
        const users = [
            {          
                name : "Matheus",
                email : "matheus@gmail.com",
                admin : false,
                password : "1234"             
            }, 
            {          
                name : "Marcio",
                email : "marcio@gmail.com",
                admin : false,
                password : "1234"
            }
        ];
        return response.json(users);
    }
}
export { ListUsersController };
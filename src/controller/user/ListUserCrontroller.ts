import { Request, Response } from "express";
import { ListUserService } from "../../service/user/ListUserService";

class ListUsersController {                                 // declara a classe ListUsersController
    async handle(request: Request, response: Response) {    // declara o metodo assincrono handle com os parâmetros request e response
    
    const listuserService= new ListUserService();
    const ret= await listuserService.execute();
    return response.json(ret);
    }
}

export { ListUsersController };         // exporta a classe ListUsersController
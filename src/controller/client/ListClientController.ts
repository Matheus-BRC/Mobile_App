import { Request, Response } from "express";
import { ListClientService } from "../../service/client/ListClientService";

class ListClientController {                                 // declara a classe ListUsersController
    async handle(request: Request, response: Response) {    // declara o metodo assincrono handle com os parâmetros request e response
    
    const listClientService= new ListClientService();
    const ret= await listClientService.execute();
    return response.json(ret);
    }
}

export { ListClientController };         // exporta a classe ListUsersController
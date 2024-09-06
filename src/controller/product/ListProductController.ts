import { Request, Response } from "express";
import { ListProductService } from "../../service/product/ListProductService";

class ListProductController {                                 // declara a classe ListUsersController
    async handle(request: Request, response: Response) {    // declara o metodo assincrono handle com os parâmetros request e response
    
    const listProductService= new ListProductService();
    const ret= await listProductService.execute();
    return response.json(ret);
    }
}

export { ListProductController };         // exporta a classe ListUsersController
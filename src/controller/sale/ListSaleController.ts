import { Request, Response } from "express";
import { ListSaleService } from "../../service/sale/ListSaleService";

class ListSaleController {                                 // declara a classe ListUsersController
    async handle(request: Request, response: Response) {    // declara o metodo assincrono handle com os parâmetros request e response
    
    const listSaleService= new ListSaleService();
    const ret= await listSaleService.execute();
    return response.json(ret);
    }
}

export { ListSaleController };         // exporta a classe ListUsersController
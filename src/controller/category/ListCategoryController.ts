import { Request, Response } from "express";
import { ListCategoryService } from "../../service/category/ListCategoryService";

class ListCategoryController {                                 // declara a classe ListUsersController
    async handle(request: Request, response: Response) {    // declara o metodo assincrono handle com os parâmetros request e response
    
    const listCategoryService= new ListCategoryService();
    const ret= await listCategoryService.execute();
    return response.json(ret);
    }
}

export { ListCategoryController };         // exporta a classe ListUsersController
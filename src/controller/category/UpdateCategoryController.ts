import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";

class UpdateCategoryController {

  async handle(request: Request, response: Response) {        // declara o metodo assincrono handle com os parâmetros request e response
    
    const { name, description } = request.body;    // extrai as variáveis name, email, admin, password do corpo da request
    const id= request.params.id;                              // declara a variável id como sendo o parâmetro id da request

    console.log(id);
    console.log(name);      // printa no console o name
    console.log(description);
     
    const category = 
    {
      id:id,
      name:name,           // define name como sendo o name do corpo da resquisição request.body
      description: description
    };   

     const createCategoryService = new UpdateCategoryService();
     const ret = await createCategoryService.execute(category);
     return response.json(ret);  // printa na resposta (response) da requisição a message
  }
}

export { UpdateCategoryController };    // exporta a classe UpdateUserController
import { Request, Response } from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";

class UpdateProductController {

    async handle(request: Request, response: Response) {        // declara o metodo assincrono handle com os parâmetros request e response
        
        const { name, description, price, categoryId } = request.body;    // extrai as variáveis name, email, admin, password do corpo da request
        const id= request.params.id;                              // declara a variável id como sendo o parâmetro id da request

        console.log(id);
        console.log(name);      // printa no console o name
        console.log(description);
        console.log(price);
        console.log(categoryId);
        
        const product = 
        {
            id:id,
            name:name,           // define name como sendo o name do corpo da resquisição request.body
            description: description,
            price: price,
            categoryId: categoryId
        };   

        const createProductService = new UpdateProductService();
        const ret = await createProductService.execute(product);
        return response.json(ret);  // printa na resposta (response) da requisição a message
    }
}

export { UpdateProductController };    // exporta a classe UpdateUserController
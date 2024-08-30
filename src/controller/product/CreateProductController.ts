import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/createProductService";

class CreateProductController {                                        // declara a classe CreateUserController

    async handle(request: Request, response: Response){             // declara o metodo assincrono handle com os parâmetros request e response
        const { id, name, description, price, categoryId } = request.body;      // extrai as variáveis name, email, admin, password do corpo da request

        console.log(id);
        console.log(name);      // printa no console o name
        console.log(description);     // printa no console o email
        console.log(price);     // printa no console o admin
        console.log(categoryId);  // printa no console o password

        const product =            // declara a variável const users
        {
            id: id,
            name : name,            // define name como sendo o name do corpo da resquisição request.body
            description: description,
            price: price,
            categoryId: categoryId
        };

        const createProductService = new CreateProductService();
        const ret = await createProductService.execute(product);
        return response.json(ret);    // printa na resposta (response) da requisição a message
    }
}

export{ CreateProductController };     // exporta a classe Create
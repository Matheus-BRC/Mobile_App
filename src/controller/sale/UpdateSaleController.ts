import { Request, Response } from "express";
import { UpdateSaleService } from "../../service/sale/UpdateSaleService";

class UpdateSaleController {

  async handle(request: Request, response: Response) {        // declara o metodo assincrono handle com os parâmetros request e response
    
    const { userId, productId, clientId, quantity } = request.body;    // extrai as variáveis name, email, admin, password do corpo da request
    const id= request.params.id;                              // declara a variável id como sendo o parâmetro id da request

    console.log(id);
    console.log(userId);      // printa no console o name
    console.log(productId);
    console.log(clientId);
    console.log(quantity);
     
    const sale = 
    {
        id:id,
        userId: userId,
        productId: productId,
        clientId: clientId,
        quantity: quantity
    };   

     const createSaleService = new UpdateSaleService();
     const ret = await createSaleService.execute(sale);
     return response.json(ret);  // printa na resposta (response) da requisição a message
  }
}

export { UpdateSaleController };    // exporta a classe UpdateUserController
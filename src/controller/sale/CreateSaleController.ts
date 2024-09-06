import { Request, Response } from "express";
import { CreateSaleService } from "../../service/sale/CreateSaleService";

class CreateSaleController {

    async handle(request: Request, response: Response){
        const { id, userId, productId, clientId, quantity } = request.body;

        console.log(id);
        console.log(userId);
        console.log(productId);
        console.log(clientId);
        console.log(quantity);

        const Sale = 
        {
            id: id,
            userId: userId,
            productId: productId,
            clientId: clientId,
            quantity: quantity
        };

        const createSaleService = new CreateSaleService();
        const ret = await createSaleService.execute(Sale);
        return response.json(ret);
    }
}

export{ CreateSaleController };
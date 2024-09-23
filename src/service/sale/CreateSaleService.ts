import { ISaleRequest } from "../../interface/SaleInterface";
import { SaleRepository } from "../../repository/SaleRepository";
import { getCustomRepository } from "typeorm";

class CreateSaleService {
    async execute({ userId, productId, clientId, quantity }: ISaleRequest){
        
        if (!userId) {
            throw new Error("UserId Incorrect");
        }

        if (!productId) {
            throw new Error("ProductId Incorrect");
        }

        if (!clientId) {
            throw new Error("ClientId Incorrect");
        }

        if (!quantity) {
            throw new Error("Quantity Incorrect");
        }

        const salesRepository = getCustomRepository(SaleRepository);
        const sale = salesRepository.create(
        {
            userId, 
            productId, 
            clientId, 
            quantity
        });
        
        await salesRepository.save(sale);

        return sale;
        
        // return { message: "Oferta Incluida com Sucesso"};
    }
}

export { CreateSaleService };
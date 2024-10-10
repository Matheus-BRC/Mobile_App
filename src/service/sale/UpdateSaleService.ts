import { getCustomRepository } from "typeorm";
import { ISaleRequest } from "../../interface/SaleInterface";
import { SaleRepository } from "../../repository/SaleRepository";

class UpdateSaleService {
    async execute({ id, userId, productId, clientId, quantity }: ISaleRequest) {
        
        if (!id) {
          throw new Error("ID Incorrect");
        }

        const salesRepository = getCustomRepository(SaleRepository);
 
        const saleAlreadyExists = await salesRepository.findOne({
          id,
        });
     
        if (!saleAlreadyExists) {
          throw new Error("User not exists");
        }

        saleAlreadyExists.userId = userId;
        saleAlreadyExists.productId = productId;
        saleAlreadyExists.clientId = clientId;
        saleAlreadyExists.quantity = quantity;
        saleAlreadyExists.updated_at = new Date();
        
        await salesRepository.update(id, saleAlreadyExists);

        return { message: "Oferta Atualizada com Sucesso" }
    }
}

export { UpdateSaleService };
import { ISaleRequest } from "../../interface/SaleInterface";

class UpdateSaleService {
    async execute({ id, userId, productId, clientId, quantity }: ISaleRequest) {
        
        if (!id) {
          throw new Error("ID Incorrect");
        }

        var vsale = {
          id: id, 
          userId: userId,
          productId: productId,
          clientId: clientId,
          quantity: quantity
        }

        return { message: "Oferta Atualizada com Sucesso" }
    }
}

export { UpdateSaleService };
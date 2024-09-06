import { ISaleRequest } from "../../interface/SaleInterface";

class CreateSaleService {
    async execute({ id, userId, productId, clientId, quantity }: ISaleRequest){
        
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
        
        return { message: "Oferta Incluida com Sucesso"};
    }
}

export { CreateSaleService };
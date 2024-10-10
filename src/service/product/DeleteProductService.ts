import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../../repository/ProductRepository";

class DeleteProductService {

    async execute(id:any) {

        const productsRepository = getCustomRepository(ProductRepository);
        const productAlreadyExists = await productsRepository.findOne({ id });
    
        if (!productAlreadyExists) {
            throw new Error("Product not exists");
        }
    
        await productsRepository.delete(id);
        return { message: "Produto Excluído com Sucesso" };
    }
}

export { DeleteProductService };
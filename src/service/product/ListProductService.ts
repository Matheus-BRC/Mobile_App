import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../../repository/ProductRepository";

class ListProductService {
    async execute() {
        const productRepository = getCustomRepository(ProductRepository);        
        const products = await productRepository.find();
        return products;
    }
}

export { ListProductService };
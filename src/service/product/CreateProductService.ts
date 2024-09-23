import { IProductRequest } from "../../interface/ProductInterface";
import { ProductRepository } from "../../repository/ProductRepository";
import { getCustomRepository } from "typeorm";

class CreateProductService {
  async execute({ name, description, price, categoryId }: IProductRequest) {
    
    if (!name) {
      throw new Error("Name Incorrect");
    }

    if (!price) {
      throw new Error("Price Incorrect");
    }

    if (!categoryId) {
      throw new Error("CategoryId Incorrect");
    }
    
    const productsRepository = getCustomRepository(ProductRepository);
    const product = productsRepository.create(
      {
        name, 
        description, 
        price, 
        categoryId
      });
    
    await productsRepository.save(product);

    return product;
    
    // return { message: "Produto Incluido com Sucesso" };
  }
}

export { CreateProductService };
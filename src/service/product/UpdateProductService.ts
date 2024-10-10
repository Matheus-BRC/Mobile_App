import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../interface/ProductInterface";
import { ProductRepository } from "../../repository/ProductRepository";

class UpdateProductService {
    async execute({id, name, description, price, categoryId }: IProductRequest) {
        
      if (!id) {
        throw new Error("ID Incorrect");
      }

      const productsRepository = getCustomRepository(ProductRepository);
 
      const productAlreadyExists = await productsRepository.findOne({
        id,
      });
   
      if (!productAlreadyExists) {
        throw new Error("User not exists");
      }

      productAlreadyExists.name = name;
      productAlreadyExists.description = description;
      productAlreadyExists.price = price;
      productAlreadyExists.categoryId = categoryId;
      productAlreadyExists.updated_at = new Date();
      
      await productsRepository.update(id, productAlreadyExists);

        return { message: "Produto Atualizado com Sucesso" }
      }
}

export { UpdateProductService };
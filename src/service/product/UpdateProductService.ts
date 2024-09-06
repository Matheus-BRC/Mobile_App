import { IProductRequest } from "../../interface/ProductInterface";

class UpdateProductService {
    async execute({id, name, description, price, categoryId }: IProductRequest) {
        
      if (!id) {
        throw new Error("ID Incorrect");
      }

        var vproduct = {
            id: id, 
            name: name, 
            description: description,
            price: price,
            categoryId: categoryId
        }

        return { message: "Produto Atualizado com Sucesso" }
    }
}

export { UpdateProductService };
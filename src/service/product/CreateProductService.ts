import { IProductRequest } from "../../interface/ProductInterface";

class CreateProductService {
  async execute({ id, name, description, price, categoryId }: IProductRequest) {
    
    if (!id) {
      throw new Error("ID Incorrect");
    }

    if (!description) {
      throw new Error("Description incorrect");
    }
    
    return { message: "Produto incluido com Sucesso" };
  }
}

export { CreateProductService };
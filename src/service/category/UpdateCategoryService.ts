import { ICategoryRequest } from "../../interface/CategoryInterface";

class UpdateCategoryService {
    async execute({id, name, description }: ICategoryRequest) {
        
      if (!id) {
        throw new Error("ID Incorrect");
      }

        var vcategory = {
          id: id, 
          name: name, 
          description: description
        }

        return { message: "Categoria Atualizada com Sucesso" }
    }
}

export { UpdateCategoryService };
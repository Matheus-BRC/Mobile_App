import { ICategoryRequest } from "../../interface/CategoryInterface";

class UpdateCategoryService {
    async execute({id, name, description }: ICategoryRequest) {
        
        if (!id) {
          throw new Error("ID Incorrect");
        }

        if (!description) {
          throw new Error("Description Incorrect");
        }

        var vcategory = {
          id: id, 
          name: name, 
          description: description
        }

        return { message: "Categoria atualizada com Sucesso" }
    }
}

export { UpdateCategoryService };
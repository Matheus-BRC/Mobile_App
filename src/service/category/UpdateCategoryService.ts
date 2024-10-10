import { getCustomRepository } from "typeorm";
import { ICategoryRequest } from "../../interface/CategoryInterface";
import { CategoryRepository } from "../../repository/CategoryRepository";

class UpdateCategoryService {
    async execute({id, name, description }: ICategoryRequest) {
        
      if (!id) {
        throw new Error("ID Incorrect");
      }

      const categorysRepository = getCustomRepository(CategoryRepository);
 
      const categoryAlreadyExists = await categorysRepository.findOne({
        id,
      });
   
      if (!categoryAlreadyExists) {
        throw new Error("Category not exists");
      }

      categoryAlreadyExists.name = name;
      categoryAlreadyExists.description = description;
      categoryAlreadyExists.updated_at = new Date();
      
      await categorysRepository.update(id, categoryAlreadyExists);

      return { message: "Categoria Atualizada com Sucesso" }
    }
}

export { UpdateCategoryService };
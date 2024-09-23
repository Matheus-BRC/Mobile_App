import { ICategoryRequest } from "../../interface/CategoryInterface";
import { CategoryRepository } from "../../repository/CategoryRepository";
import { getCustomRepository } from "typeorm";

class CreateCategoryService {
    async execute({ name, description }: ICategoryRequest){

        if (!name) {
            throw new Error("Name Incorrect");
        }
        
        const categoriesRepository = getCustomRepository(CategoryRepository);
        const category = categoriesRepository.create(
        {
            name, 
            description
        });
        
        await categoriesRepository.save(category);

        return category;
        // return { message: "Categoria Incluida com Sucesso"};
    }
}

export { CreateCategoryService };
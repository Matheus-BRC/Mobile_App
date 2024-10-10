import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repository/CategoryRepository";

class ListCategoryService {
    async execute() {
        const categoryRepository = getCustomRepository(CategoryRepository);        
        const categorys = await categoryRepository.find();
        return categorys;
    }
}

export { ListCategoryService };
import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repository/CategoryRepository";

class DeleteCategoryService {

    async execute(id:any) {

        const categorysRepository = getCustomRepository(CategoryRepository);
        const categoryAlreadyExists = await categorysRepository.findOne({ id });
    
        if (!categoryAlreadyExists) {
            throw new Error("Category not exists");
        }
    
        await categorysRepository.delete(id);
        return { message: "Categoria Excluída com Sucesso" };
    }
}

export { DeleteCategoryService };
class DeleteCategoryService {

    async execute(id:any) {

        if (!id) {
            throw new Error("Id Incorrect");
        }

        return { message: "Categoria Excluída com Sucesso" };
    }
}

export { DeleteCategoryService };
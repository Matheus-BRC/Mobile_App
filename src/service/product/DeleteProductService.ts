class DeleteProductService {

    async execute(id:any) {

        if (!id) {
            throw new Error("Id Incorrect");
        }

        return { message: "Produto Excluído com Sucesso" };
    }
}

export { DeleteProductService };
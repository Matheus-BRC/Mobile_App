class DeleteSaleService {

    async execute(id:any) {

        if (!id) {
            throw new Error("Id Incorrect");
        }

        return { message: "Oferta Excluída com Sucesso" };
    }
}

export { DeleteSaleService };
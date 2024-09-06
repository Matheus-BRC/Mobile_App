class DeleteClientService {

    async execute(id:any) {

        if (!id) {
            throw new Error("Id Incorrect");
        }

        return { message: "Cliente Excluído com Sucesso" };
    }
}

export { DeleteClientService };
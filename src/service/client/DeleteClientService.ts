import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../../repository/ClientRepository";

class DeleteClientService {

    async execute(id:any) {

        const clientsRepository = getCustomRepository(ClientRepository);
        const clientAlreadyExists = await clientsRepository.findOne({ id });
    
        if (!clientAlreadyExists) {
            throw new Error("Client not exists");
        }
    
        await clientsRepository.delete(id);
        return { message: "Cliente Excluído com Sucesso" };
    }
}

export { DeleteClientService };
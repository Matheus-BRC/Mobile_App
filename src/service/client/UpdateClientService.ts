import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interface/ClientInterface";
import { ClientRepository } from "../../repository/ClientRepository";

class UpdateClientService {
    async execute({id, name, description, cpf, address, fone }: IClientRequest) {
        
      if (!id) {
        throw new Error("ID Incorrect");
      }

      const clientsRepository = getCustomRepository(ClientRepository);
 
      const clientAlreadyExists = await clientsRepository.findOne({
        id,
      });
   
      if (!clientAlreadyExists) {
        throw new Error("Client not exists");
      }

      clientAlreadyExists.name = name;
      clientAlreadyExists.description = description;
      clientAlreadyExists.cpf = cpf;
      clientAlreadyExists.address = address;
      clientAlreadyExists.fone = fone;
      clientAlreadyExists.updated_at = new Date();
      
      await clientsRepository.update(id, clientAlreadyExists);

      return { message: "Cliente Atualizado com Sucesso" }
    }
}

export { UpdateClientService };
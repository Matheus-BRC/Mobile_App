import { IClientRequest } from "../../interface/ClientInterface";
import { ClientRepository } from "../../repository/ClientRepository";
import { getCustomRepository } from "typeorm";

class CreateClientService {
    async execute({ name, description, cpf, address, fone}: IClientRequest) {
      
      if (!name) {
        throw new Error("Name Incorrect");
      }
  
      if (!cpf) {
        throw new Error("CPF Incorrect");
      }

      if (!address) {
        throw new Error("Address Incorrect");
      }

      if (!fone) {
        throw new Error("Fone Incorrect");
      }

      const clientsRepository = getCustomRepository(ClientRepository);
      const client = clientsRepository.create(
        {
          name, 
          description, 
          cpf, 
          address, 
          fone
        });
      
      await clientsRepository.save(client);

      return client;
      // return { message: "Cliente Incluido com Sucesso" };
    }
  }
  
  export { CreateClientService };
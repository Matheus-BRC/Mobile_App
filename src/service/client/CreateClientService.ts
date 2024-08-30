import { IClientRequest } from "../../interface/ClientInterface";

class CreateClientService {
    async execute({ id, name, description, cpf, address, fone}: IClientRequest) {
      
      if (!id) {
        throw new Error("ID Incorrect");
      }
  
      if (!description) {
        throw new Error("Description Incorrect");
      }
      
      return { message: "Cliente incluido com Sucesso" };
    }
  }
  
  export { CreateClientService };
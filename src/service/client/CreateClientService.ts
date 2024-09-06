import { IClientRequest } from "../../interface/ClientInterface";

class CreateClientService {
    async execute({ id, name, description, cpf, address, fone}: IClientRequest) {
      
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
      
      return { message: "Cliente Incluido com Sucesso" };
    }
  }
  
  export { CreateClientService };
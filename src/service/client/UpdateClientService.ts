import { IClientRequest } from "../../interface/ClientInterface";

class UpdateClientService {
    async execute({id, name, description, cpf, address, fone }: IClientRequest) {
        
      if (!id) {
        throw new Error("ID Incorrect");
      }

        var vclient = {
            id: id, 
            name: name, 
            description: description,
            cpf: cpf,
            address: address,
            fone: fone
        }

        return { message: "Cliente Atualizado com Sucesso" }
    }
}

export { UpdateClientService };
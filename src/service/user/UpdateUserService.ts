import { IUserRequest } from "../../interface/UserInterface";

class UpdateUserService {
    async execute({id, name, email, admin = false, password }: IUserRequest) {
        
        if (!id) {
          throw new Error("ID incorrect");
        }

        if (!admin) {
          throw new Error("Admin incorrect");
        }

        var vuser = {
          id: id, 
          name: name, 
          email: email, 
          admin: admin, 
          password: password
        }

        return { message: "Usuário Atualizado com Sucesso" }
    }
}

export { UpdateUserService };
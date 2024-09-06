import { IUserRequest } from "../../interface/UserInterface";

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    
    if (!name) {
      throw new Error("Name incorrect");
    }

    if (!email) {
      throw new Error("Email incorrect");
    }

    if (!password) {
      throw new Error("Password incorrect");
    }
    
    return { message: "Usuário Incluido com Sucesso" };
  }
}

export { CreateUserService };
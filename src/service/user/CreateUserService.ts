import { IUserRequest } from "../../interface/UserInterface";

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    
    if (!email) {
      throw new Error("Email incorrect");
    }

    if (!password) {
      throw new Error("Password incorrect");
    }
    
    return { message: "Registro incluido com Sucesso" };
  }
}

export { CreateUserService };
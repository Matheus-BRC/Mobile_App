import { IUserRequest } from "../../interface/UserInterface";
import { hash } from "bcryptjs";
import { UserRepository } from "../../repository/UserRepository";
import { getCustomRepository } from "typeorm";

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

    const passwordHash = await hash(password, 8);
    
    const usersRepository = getCustomRepository(UserRepository);
    const user = usersRepository.create(
      {
        name,
        email,
        admin,
        password: passwordHash,
      });
    
    await usersRepository.save(user);

    return user;
    // return { message: "Usuário Incluido com Sucesso" };
  }
}

export { CreateUserService };
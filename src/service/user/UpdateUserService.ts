import { IUserRequest } from "../../interface/UserInterface";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repository/UserRepository";
import { hash } from "bcryptjs";

class UpdateUserService {
    async execute({id, name, email, admin = false, password }: IUserRequest) {
        
        if (!email) {
          throw new Error("Email incorrect");
        }

        if (!password) {
          throw new Error("Admin incorrect");
        }

        const usersRepository = getCustomRepository(UserRepository);
 
        const userAlreadyExists = await usersRepository.findOne({
          id,
        });
     
        if (!userAlreadyExists) {
          throw new Error("User not exists");
        }

        const passwordHash = await hash(password, 8);
        userAlreadyExists.name = name;
        userAlreadyExists.email = email;
        userAlreadyExists.admin = admin;
        userAlreadyExists.updated_at = new Date();
        userAlreadyExists.password = passwordHash;
        
        await usersRepository.update(id, userAlreadyExists);

        return { message: "Usuário Atualizado com Sucesso" }
    }
}

export { UpdateUserService };
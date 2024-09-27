import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repository/UserRepository";

class DeleteUserService {

    async execute(id:any) {
      if (!id) {
        throw new Error("Id incorrect");
      }

      const usersRepository = getCustomRepository(UserRepository);
      const userAlreadyExists = await usersRepository.findOne({ id });
 
      if (!userAlreadyExists) {
        throw new Error("User not exists");
      }
 
      await usersRepository.delete(id)
      return { message: "Usuário Excluído com Sucesso" }
    }
}

export { DeleteUserService };
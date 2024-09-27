import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repository/UserRepository";

class ListUserService {
    async execute() {
        const userRepository = getCustomRepository(UserRepository);        
        const users = await userRepository.find();
        return users;
    }
}
export { ListUserService };
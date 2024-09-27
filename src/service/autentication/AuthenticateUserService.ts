import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAuthenticateRequest } from "../../interface/IAuthenticateRequest";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repository/UserRepository";
 
class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);
 
    // Verificar se email existe
    const user = await userRepository.findOne({
      email,
    });
 
    if(!user){
        throw new Error("Email incorreto");
    }

    //const passwordHash = await hash("fatec", 8);
    const passwordMatch = await compare(password, user?.password);
 
    if (!passwordMatch) {
      throw new Error("Password incorrect");
    }

    // Gerar token
    const token = sign(
      {
        email:user.email,
      },
      "4f93ac9d10cb751b8c9c646bc9dbccb9",
      {
        subject: (user.admin?"Admin":"others"),
        expiresIn: "1d",
      }
    );
    
    return token;
  }
}
export { AuthenticateUserService };
import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";

class UpdateUserController {

  async handle(request: Request, response: Response) {        // declara o metodo assincrono handle com os parâmetros request e response
    
    const { name, email, admin, password } = request.body;    // extrai as variáveis name, email, admin, password do corpo da request
    const id= request.params.id;                              // declara a variável id como sendo o parâmetro id da request

    console.log(name);      // printa no console o name
    console.log(email);     // printa no console o email
    console.log(admin);     // printa no console o admin
    console.log(password);  // printa no console o password
     
    const user = 
    {
      id:id,
      name:name,           // define name como sendo o name do corpo da resquisição request.body
      email:email,         // define email como sendo o email do corpo da resquisição request.body
      admin:admin,         // define admin como sendo o admin do corpo da resquisição request.body
      password:password    // define password como sendo o pasword do corpo da resquisição request.body
    };   

     const createUserService = new UpdateUserService();
     const ret = await createUserService.execute(user);
     return response.json({message:"Registro Editado com Sucesso"});  // printa na resposta (response) da requisição a message
  }
}

export { UpdateUserController };    // exporta a classe UpdateUserController
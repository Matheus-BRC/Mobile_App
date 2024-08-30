import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";
 
class DeleteUserController {                                            // declara a classe CreateUserController
  async handle(request: Request, response: Response) {                  // declara o metodo assincrono handle com os parâmetros request e response 
    const id= request.params.id;                                        // declara a variável id como sendo o parâmetro id da request
    const deleteUserService = new DeleteUserService();
    const ret = await deleteUserService.execute(id);
    return response.json({message:"Registro Excluido com Sucesso"});    // printa na resposta (response) da requisição a message
  }
}
 
export { DeleteUserController };    // exporta a classe DeleteUserController
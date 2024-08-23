import { Request, Response } from "express";
 
class DeleteUserController {
  async handle(request: Request, response: Response) {
 
    const id= request.params.id;
    return response.json({message:"Registro Excluido com Sucesso"});
  }
  
}
 
export { DeleteUserController };
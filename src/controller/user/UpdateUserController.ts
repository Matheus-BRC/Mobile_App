import { Request, Response } from "express";

class UpdateUserController {

  async handle(request: Request, response: Response) {
    
    const { name, email, admin, password } = request.body;
    const id= request.params.id;

    console.log(name)
    console.log(email)
    console.log(admin)
    console.log(password)  
     
    const user = 
    {
       name:name,
       email:email,
       admin:admin,
       password:password
     };   

     return response.json({message:"Registro Editado com Sucesso"});
  }
}

export { UpdateUserController };
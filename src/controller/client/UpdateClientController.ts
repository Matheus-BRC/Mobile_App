import { Request, Response } from "express";
import { UpdateClientService } from "../../service/client/UpdateClientService";

class UpdateClientController {

    async handle(request: Request, response: Response) {        // declara o metodo assincrono handle com os parâmetros request e response
    
        const { name, description, cpf, address, fone } = request.body;    // extrai as variáveis name, email, admin, password do corpo da request
        const id= request.params.id;                              // declara a variável id como sendo o parâmetro id da request

        console.log(id);
        console.log(name);      // printa no console o name
        console.log(description);
        console.log(cpf);
        console.log(address);      // printa no console o name
        console.log(fone);
        
        const client = 
        {
            id:id,
            name:name,           // define name como sendo o name do corpo da resquisição request.body
            description: description,
            cpf: cpf,
            address: address,
            fone: fone
        };   

        const createClientService = new UpdateClientService();
        const ret = await createClientService.execute(client);
        return response.json(ret);  // printa na resposta (response) da requisição a message
    }
}

export { UpdateClientController };    // exporta a classe UpdateUserController
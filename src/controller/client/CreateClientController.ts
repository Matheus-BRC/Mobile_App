import { Request, Response } from "express";
import { CreateClientService } from "../../service/client/CreateClientService";

class CreateClientController {                                        // declara a classe CreateUserController

    async handle(request: Request, response: Response){             // declara o metodo assincrono handle com os parâmetros request e response
        const { id, name, description, cpf, address, fone } = request.body;      // extrai as variáveis name, email, admin, password do corpo da request

        console.log(id);
        console.log(name);      // printa no console o name
        console.log(description);     // printa no console o email
        console.log(cpf);     // printa no console o admin
        console.log(address);  // printa no console o password
        console.log(fone);

        const client =            // declara a variável const users
        {
            id: id,
            name : name,            // define name como sendo o name do corpo da resquisição request.body
            description: description,
            cpf: cpf,
            address: address,
            fone: fone
        };

        const createClientService = new CreateClientService();
        const ret = await createClientService.execute(client);
        return response.json(ret);    // printa na resposta (response) da requisição a message
    }
}

export{ CreateClientController };     // exporta a classe CreateUserController
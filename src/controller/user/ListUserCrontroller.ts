import { Request, Response } from "express";

class ListUsersController {                                 // declara a classe ListUsersController
    async handle(request: Request, response: Response) {    // declara o metodo assincrono handle com os parâmetros request e response
        const users = [                                     // declara a variável const users
            {          
                name : "Matheus",                           // define name como Matheus no arquivo json
                email : "matheus@gmail.com",                // define email como matheus@gmail.com no arquivo json
                admin : false,                              // define admin como false no arquivo json
                password : "1234"                           // define password como 1234 no arquivo json
            }, 
            {          
                name : "Marcio",                            // define name como Marcio no arquivo json
                email : "marcio@gmail.com",                 // define email como marcio@gmail.com no arquivo json
                admin : false,                              // define admin como false no arquivo json
                password : "1234"                           // define password como 1234 no arquivo json
            }
        ];
        return response.json(users);    // retorna users em formato json para printar na resposta (response) da requisição
    }
}
export { ListUsersController };         // exporta a classe ListUsersController
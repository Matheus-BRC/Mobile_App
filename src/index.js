const express = require('express');             // inclue o express
const app = express();                          // inicia o express

app.get("/", (request,response) => {            // endpoint utilizando o metodo get para acessar dados
    return response.send("API no AR");          // retorna o conteúdo do response imprimindo na tela
});

app.get("/fim", (request,response) => {         // endpoint utilizando o metodo get para acessar dados 
    return response.send("API fora do AR");     // retorna o conteúdo do response imprimindo na tela
});

app.get("/produto", (request,response) => {     // endpoint utilizando o metodo get para acessar dados 
    console.log(request.query);                 // imprime no console
    return response.json(                       // retorna o conteúdo do response em formato json
        {
            "id": request.query.id,             // atribui a request id da query (valores contidos na url após o ?) em id
            "nome": request.query.nome          // atribui a request nome da query (valores contidos na url após o & pois é o segundo parametro) em nome
        }
    );
});

app.get("/cliente", (request,response) => {     // endpoint utilizando o metodo get para acessar dados 
    console.log(request.query);                 // imprime no console
    return response.json(                       // retorna o conteúdo do response em formato json
        {
            "id": request.query.id,             // atribui a request id da query (valores contidos na url após o ?) em id
            "cpf": request.query.cpf,           // atribui a request cpf da query (valores contidos na url após o & pois é o segundo parametro) em cpf
            "nome": request.query.nome          // atribui a request nome da query (valores contidos na url após o & pois é o terceiro parametro) em nome
        }
    );
});

app.get("/endereco", (request,response) => {    // endpoint utilizando o metodo get para acessar dados 
    console.log(request.query);                 // imprime no console
    return response.json(                       // retorna o conteúdo do response em formato json
        {
            "cep": request.query.cep,           // atribui a request cep da query (valores contidos na url após o ?) em cep
            "bairro": request.query.bairro,     // atribui a request bairro da query (valores contidos na url após o & pois é o segundo parametro) em bairro
            "estado": request.query.estado      // atribui a request estado da query (valores contidos na url após o & pois é o terceiro parametro) em estado
        }
    );
});

app.get("/fornecedor", (request,response) => {  // endpoint utilizando o metodo get para acessar dados 
    console.log(request.query);                 // imprime no console
    return response.json(                       // retorna o conteúdo do response em formato json
        {
            "segmento": request.query.segmento,     // atribui a request segmento da query (valores contidos na url após o ?) em segmento
            "nome": request.query.nome,             // atribui a request nome da query (valores contidos na url após o & pois é o segundo parametro) em nome
        }
    );
});

console.log("Start Server: 3000");  // imprime no console
app.listen(3000);                   // inicia o servidor na porta 3000
class ListClientService {
    async execute() {
        const client = [ 
            {
                name: "Matheus",
                email: "matheus@gmail.com",
                admin: false,
                password: "1234"
            }, 
            {
                name: "Fabio",
                email: "fabio@gmail.com",
                admin: false,
                password: "1234"
            }     
        ];        
        return client;
    }
}

export { ListClientService };
class ListProductService {
    async execute() {
        const product = [ 
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
        return product;
    }
}

export { ListProductService };
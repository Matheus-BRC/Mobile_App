class ListSaleService {
    async execute() {
        const sale = [ 
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
        return sale;
    }
}

export { ListSaleService };
class ListCategoryService {
    async execute() {
        const category = [ 
            {          
                name: "Fabio",
                email: "fabio@gmail.com",
                admin: false,
                password: "1234"             
            }, 
            {          
                name: "Marcio",
                email: "marcio@gmail.com", 
                admin: false,
                password: "1234"             
            }     
        ];        
        return category;
    }
}

export { ListCategoryService };
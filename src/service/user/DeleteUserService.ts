class DeleteUserService {

    async execute(id:any) {
        
      if (!id) {
        throw new Error("Id incorrect");
      }
      
      return { message: "Usuário Excluído com Sucesso" }
    }
}

export { DeleteUserService };
import { getCustomRepository } from "typeorm";
import { SaleRepository } from "../../repository/SaleRepository";

class DeleteSaleService {

    async execute(id:any) {

        if (!id) {
            throw new Error("Id Incorrect");
        }
        const salesRepository = getCustomRepository(SaleRepository);
        const saleAlreadyExists = await salesRepository.findOne({ id });
    
        if (!saleAlreadyExists) {
            throw new Error("Sale not exists");
        }
    
        await salesRepository.delete(id);
        return { message: "Oferta Excluída com Sucesso" };
    }
}

export { DeleteSaleService };
import { getCustomRepository } from "typeorm";
import { SaleRepository } from "../../repository/SaleRepository";

class ListSaleService {
    async execute() {
        const saleRepository = getCustomRepository(SaleRepository);        
        const sales = await saleRepository.find();
        return sales;
    }
}

export { ListSaleService };
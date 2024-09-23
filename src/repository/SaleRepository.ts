import { EntityRepository, Repository } from "typeorm";
import { Sale } from "../entity/Sale";

@EntityRepository(Sale)
class SaleRepository extends Repository<Sale> {

}

export { SaleRepository };
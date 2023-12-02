import { EntityRepository, Repository } from "typeorm";
import { Stock } from "../../entities/Stock";

@EntityRepository(Stock)
class StocksRepositories extends Repository<Stock>{}

export {StocksRepositories};
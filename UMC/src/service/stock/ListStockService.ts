import { getCustomRepository } from "typeorm";
import { StocksRepositories } from "../../repositories/stock/CreateStockRepository";

class ListStockService{
    async execute (){
        const stocksRepositories=getCustomRepository (StocksRepositories);

        const stocks = await stocksRepositories.find();
        return stocks;
    }
}
export {ListStockService};
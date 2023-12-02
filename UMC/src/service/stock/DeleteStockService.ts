import { getCustomRepository } from "typeorm";
import { StocksRepositories } from "../../repositories/stock/CreateStockRepository";

interface IStockDelete {
    id:string;
}
class DeleteStockService {
    async execute ({id}:IStockDelete){
        const stocksRepository = getCustomRepository(StocksRepositories);
        const stockAlreadyExists = await stocksRepository.findOne({
            id,
        });
        if (!stockAlreadyExists){
            throw new Error ("Stock not exists");
        }
        const ret = await stocksRepository.delete(id);
        var messagmsgeDelete = {
            message:"Registro excluido com sucesso"
        }
        return messagmsgeDelete;
    }
}
export {DeleteStockService};
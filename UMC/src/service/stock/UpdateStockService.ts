import { getCustomRepository } from "typeorm";
import { StocksRepositories } from "../../repositories/stock/CreateStockRepository";
import {hash} from "bcryptjs";
interface IStockRequest {
    id: string;
    product: string;
    quantity: string;
    category: string;
    supplier: string;
  }
  
  class UpdateStockService {
    async execute({ id, product,category, supplier }: IStockRequest) {
     
      const stocksRepository = getCustomRepository(StocksRepositories);
      const stockAlreadyExists = await stocksRepository.findOne({
        id,
      });
    
      if (!stockAlreadyExists){
        throw new Error ("Stock not exists") }
       stockAlreadyExists.product=product;
       stockAlreadyExists.category=category;
       stockAlreadyExists.updated_at=new Date();
       stockAlreadyExists.supplier=supplier;

       const stock = await stocksRepository.update(id, stockAlreadyExists)
       return stock;
      
      
    }
  }
  
  export { UpdateStockService };
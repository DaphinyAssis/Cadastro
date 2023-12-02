import { StocksRepositories } from "../../repositories/stock/CreateStockRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface IStockRequest {
    product: string;
    quantity: string;
    category: string;
    supplier: string;
  }
  
  class CreateStockService {
    async execute({ product, quantity, category, supplier }: IStockRequest) {
     console.log("app")
      const stocksRepository = getCustomRepository(StocksRepositories);

      if (!product) {
        throw new Error("product incorrect");
      }
  
       var vstock = {
       id:1, product:product, quantity:quantity, category:category, supplier:supplier
      }
      console.log("app")
      const stock=stocksRepository.create(
        {
          product,
          quantity,
          category,
          supplier,
        });
      await stocksRepository.save(stock);
      return stock;
    }
  }
  
  export { CreateStockService };
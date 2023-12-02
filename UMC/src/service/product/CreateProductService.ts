import { ProductsRepositories } from "../../repositories/product/CreateProductRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface IProductRequest {
    name: string;
    code: string;
    price: string;
    category: string;
  }
  
  class CreateProductService {
    async execute({ name, code, price, category }: IProductRequest) {
     console.log("app")
      const productsRepository = getCustomRepository(ProductsRepositories);

      if (!name) {
        throw new Error("Name incorrect");
      }
  
       var vproduct = {
       id:1, name:name, code:code, price:price, category:category
      }
     
      const product=productsRepository.create(
        {
          name,
          code,
          price,
          category,
        });
        console.log("app")
      await productsRepository.save(product);
      return product;
    }
  }
  
  export { CreateProductService };
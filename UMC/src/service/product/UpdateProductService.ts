import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/product/CreateProductRepository";
import {hash} from "bcryptjs";
interface IProductRequest {
    id: string;
    name: string;
    code: string;
    price: string;
    category: string;
  }
  
  class UpdateProductService {
    async execute({ id, name,price, category }: IProductRequest) {
     
      const productsRepository = getCustomRepository(ProductsRepositories);
      const productAlreadyExists = await productsRepository.findOne({
        id,
      });
    
      if (!productAlreadyExists){
        throw new Error ("Product not exists") }
       productAlreadyExists.name=name;
       productAlreadyExists.price=price;
       productAlreadyExists.updated_at=new Date();
       productAlreadyExists.category=category;

       const product = await productsRepository.update(id, productAlreadyExists)
       return product;
      
      
    }
  }
  
  export { UpdateProductService };
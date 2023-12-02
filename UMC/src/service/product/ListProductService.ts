import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/product/CreateProductRepository";

class ListProductService{
    async execute (){
        const productsRepositories=getCustomRepository (ProductsRepositories);

        const products = await productsRepositories.find();
        return products;
    }
}
export {ListProductService};
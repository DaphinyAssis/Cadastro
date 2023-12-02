import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../../repositories/product/CreateProductRepository";

interface IProductDelete {
    id:string;
}
class DeleteProductService {
    async execute ({id}:IProductDelete){
        const productsRepository = getCustomRepository(ProductsRepositories);
        const productAlreadyExists = await productsRepository.findOne({
            id,
        });
        if (!productAlreadyExists){
            throw new Error ("Product not exists");
        }
        const ret = await productsRepository.delete(id);
        var messagmsgeDelete = {
            message:"Registro excluido com sucesso"
        }
        return messagmsgeDelete;
    }
}
export {DeleteProductService};
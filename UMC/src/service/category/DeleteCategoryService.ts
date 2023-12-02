import { getCustomRepository } from "typeorm";
import { CategorysRepositories } from "../../repositories/category/CreateCategoryRepository";

interface ICategoryDelete {
    id:string;
}
class DeleteCategoryService {
    async execute ({id}:ICategoryDelete){
        const categorysRepository = getCustomRepository(CategorysRepositories);
        const categoryAlreadyExists = await categorysRepository.findOne({
            id,
        });
        if (!categoryAlreadyExists){
            throw new Error ("Category not exists");
        }
        const ret = await categorysRepository.delete(id);
        var messagmsgeDelete = {
            message:"Registro excluido com sucesso"
        }
        return messagmsgeDelete;
    }
}
export {DeleteCategoryService};
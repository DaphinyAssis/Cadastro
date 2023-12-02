import { getCustomRepository } from "typeorm";
import { CategorysRepositories } from "../../repositories/category/CreateCategoryRepository";

class ListCategoryService{
    async execute (){
        const categorysRepositories=getCustomRepository (CategorysRepositories);

        const categorys = await categorysRepositories.find();
        return categorys;
    }
}
export {ListCategoryService};
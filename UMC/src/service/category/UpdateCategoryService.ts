import { getCustomRepository } from "typeorm";
import { CategorysRepositories } from "../../repositories/category/CreateCategoryRepository";
import {hash} from "bcryptjs";
interface ICategoryRequest {
    id: string;
    name: string;
    supplier: string;
  }
  
  class UpdateCategoryService {
    async execute({ id, name,supplier}: ICategoryRequest) {
     
      const categorysRepository = getCustomRepository(CategorysRepositories);
      const categoryAlreadyExists = await categorysRepository.findOne({
        id,
      });
    
      if (!categoryAlreadyExists){
        throw new Error ("Category not exists") }
       categoryAlreadyExists.name=name;
       categoryAlreadyExists.supplier=supplier;
       categoryAlreadyExists.updated_at=new Date();

       const category = await categorysRepository.update(id, categoryAlreadyExists)
       return category;
      
      
    }
  }
  
  export { UpdateCategoryService };
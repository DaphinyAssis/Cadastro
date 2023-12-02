import { CategorysRepositories } from "../../repositories/category/CreateCategoryRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface ICategoryRequest {
    name: string;
    supplier: string;
  }
  
  class CreateCategoryService {
    async execute({ name, supplier}: ICategoryRequest) {
     console.log("app")
      const categorysRepository = getCustomRepository(CategorysRepositories);

      if (!name) {
        throw new Error("Name incorrect");
      }
  
       var vcategory = {
       id:1, name:name, supplier:supplier
      }
      console.log("app")
      const category=categorysRepository.create(
        {
          name,
          supplier,
        });
      await categorysRepository.save(category);
      return category;
    }
  }
  
  export { CreateCategoryService };
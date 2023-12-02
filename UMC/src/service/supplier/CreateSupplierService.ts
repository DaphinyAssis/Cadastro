import { SuppliersRepositories } from "../../repositories/supplier/CreateSupplierRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface ISupplierRequest {
    name: string;
    email: string;
    category: string;
  }
  
  class CreateSupplierService {
    async execute({ name, email, category}: ISupplierRequest) {
     console.log("app")
      const suppliersRepository = getCustomRepository(SuppliersRepositories);

      if (!email) {
        throw new Error("Email incorrect");
      }
  
       var vsupplier = {
       id:1, name:name, email:email, category:category
      }
      console.log("app")
      const supplier=suppliersRepository.create(
        {
          name,
          email,
          category
        });
      await suppliersRepository.save(supplier);
      return supplier;
    }
  }
  
  export { CreateSupplierService };
import { getCustomRepository } from "typeorm";
import { SuppliersRepositories } from "../../repositories/supplier/CreateSupplierRepository";
import {hash} from "bcryptjs";
interface ISupplierRequest {
    id: string;
    name: string;
    email: string;
    category: string;
  }
  
  class UpdateSupplierService {
    async execute({ id, name, category }: ISupplierRequest) {
     
      const suppliersRepository = getCustomRepository(SuppliersRepositories);
      const supplierAlreadyExists = await suppliersRepository.findOne({
        id,
      });
    
      if (!supplierAlreadyExists){
        throw new Error ("Supplier not exists") }
       supplierAlreadyExists.name=name;
       supplierAlreadyExists.category=category;
       supplierAlreadyExists.updated_at=new Date();

       const supplier = await suppliersRepository.update(id, supplierAlreadyExists)
       return supplier;
      
      
    }
  }
  
  export { UpdateSupplierService };
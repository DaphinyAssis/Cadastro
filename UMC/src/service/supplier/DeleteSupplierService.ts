import { getCustomRepository } from "typeorm";
import { SuppliersRepositories } from "../../repositories/supplier/CreateSupplierRepository";

interface ISupplierDelete {
    id:string;
}
class DeleteSupplierService {
    async execute ({id}:ISupplierDelete){
        const suppliersRepository = getCustomRepository(SuppliersRepositories);
        const supplierAlreadyExists = await suppliersRepository.findOne({
            id,
        });
        if (!supplierAlreadyExists){
            throw new Error ("Supplier not exists");
        }
        const ret = await suppliersRepository.delete(id);
        var messagmsgeDelete = {
            message:"Registro excluido com sucesso"
        }
        return messagmsgeDelete;
    }
}
export {DeleteSupplierService};
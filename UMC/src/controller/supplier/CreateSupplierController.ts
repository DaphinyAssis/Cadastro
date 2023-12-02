import { Request, Response } from "express";
import { CreateSupplierService } from "../../service/supplier/CreateSupplierService";
class CreateSupplierController {
  async handle(request: Request, response: Response) {
   const { name, email, category } = request.body;
   console.log(name)
   console.log(email)
   console.log(category)   
   const supplier = {
      name:name,
      email:email,
      category:category,
    }; 
    const createSupplierService  = new CreateSupplierService();
    const ret = await  createSupplierService.execute(supplier);
    return response.json(ret);

  }
}
export { CreateSupplierController };
import { Request, Response } from "express";
import { UpdateSupplierService } from "../../service/supplier/UpdateSupplierService";

class UpdateSupplierController {

  async handle(request: Request, response: Response) {
    const { id, name, email, category} = request.body;

    const updateSupplierService = new UpdateSupplierService();

    const supplier = await updateSupplierService.execute({id,
      name,
      email,
      category
    });
    return response.json(supplier);
  }
}

export { UpdateSupplierController };
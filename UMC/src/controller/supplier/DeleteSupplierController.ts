import { Request, Response } from "express";
import { DeleteSupplierService } from "../../service/supplier/DeleteSupplierService";

class DeleteSupplierController {
  async handle(request: Request, response: Response) {
    const deleteSupplierService = new DeleteSupplierService();
    const id= request.params.id;
    const suppliers = await deleteSupplierService.execute({id});

    return response.json(suppliers);
  }
}

export { DeleteSupplierController };
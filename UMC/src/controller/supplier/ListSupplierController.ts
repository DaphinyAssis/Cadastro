import { Request, Response } from "express";
import {  ListSupplierService } from "../../service/supplier/ListSupplierService";
class ListSuppliersController {
    async handle(request: Request, response: Response) {    
      const listSupplierService = new ListSupplierService();
      const suppliers = await listSupplierService.execute();
      return response.json(suppliers); 
    }    
  } 
  export { ListSuppliersController };
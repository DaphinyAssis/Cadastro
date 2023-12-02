import { getCustomRepository } from "typeorm";
import { OrdersRepositories } from "../../repositories/order/CreateOrderRepository";
import {hash} from "bcryptjs";
interface IOrderRequest {
    id: string;
    number: string;
    email: string;
    product: string;
    quantity: string;
    price: string;
  }
  
  class UpdateOrderService {
    async execute({ id, number,product, quantity, price }: IOrderRequest) {
     
      const ordersRepository = getCustomRepository(OrdersRepositories);
      const orderAlreadyExists = await ordersRepository.findOne({
        id,
      });
    
      if (!orderAlreadyExists){
        throw new Error ("Order not exists") }
        orderAlreadyExists.number=number;
        orderAlreadyExists.product=product;
        orderAlreadyExists.quantity=quantity;
        orderAlreadyExists.price=price;

        orderAlreadyExists.updated_at=new Date();

       const order = await ordersRepository.update(id, orderAlreadyExists)
       return order;
      
      
    }
  }
  
  export { UpdateOrderService };
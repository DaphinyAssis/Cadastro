import {OrdersRepositories } from "../../repositories/order/CreateOrderRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface IOrderRequest {
    number: string;
    email: string;
    product: string;
    quantity: string;
    price: string;
  }
  
  class CreateOrderService {
    async execute({ number, email, product, quantity ,price }: IOrderRequest) {
     console.log("app")
      const ordersRepository = getCustomRepository(OrdersRepositories);

      if (!number) {
        throw new Error("Number incorrect");
      }
  
       var vorder = {
       id:1, number:number , email:email, product: product, quantity:quantity, price:price
      }

      console.log("app")
      const order=ordersRepository.create(
        {
          number,
          email,
          product,
          quantity,
          price,
        });
      await ordersRepository.save(order);
      return order;
    }
  }
  
  export { CreateOrderService };
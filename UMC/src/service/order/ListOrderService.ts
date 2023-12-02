import { getCustomRepository } from "typeorm";
import { OrdersRepositories } from "../../repositories/order/CreateOrderRepository";

class ListOrderService{
    async execute (){
        const ordersRepositories=getCustomRepository (OrdersRepositories);

        const orders = await ordersRepositories.find();
        return orders;
    }
}
export {ListOrderService};
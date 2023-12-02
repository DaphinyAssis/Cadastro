import { getCustomRepository } from "typeorm";
import { OrdersRepositories } from "../../repositories/order/CreateOrderRepository";

interface IOrderDelete {
    id:string;
}
class DeleteOrderService {
    async execute ({id}:IOrderDelete){
        const ordersRepository = getCustomRepository(OrdersRepositories);
        const orderAlreadyExists = await ordersRepository.findOne({
            id,
        });
        if (!orderAlreadyExists){
            throw new Error ("Order not exists");
        }
        const ret = await ordersRepository.delete(id);
        var messagmsgeDelete = {
            message:"Registro excluido com sucesso"
        }
        return messagmsgeDelete;
    }
}
export {DeleteOrderService};
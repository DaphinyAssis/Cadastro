import { EntityRepository, Repository } from "typeorm";
import { Order } from "../../entities/Order";

@EntityRepository(Order)
class OrdersRepositories extends Repository<Order>{}

export {OrdersRepositories};
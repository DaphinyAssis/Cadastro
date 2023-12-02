import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/user/CreateUserRepository";

interface IUserDelete {
    id:string;
}
class DeleteUserService {
    async execute ({id}:IUserDelete){
        const usersRepository = getCustomRepository(UsersRepositories);
        const userAlreadyExists = await usersRepository.findOne({
            id,
        });
        if (!userAlreadyExists){
            throw new Error ("User not exists");
        }
        const ret = await usersRepository.delete(id);
        var messagmsgeDelete = {
            message:"Registro excluido com sucesso"
        }
        return messagmsgeDelete;
    }
}
export {DeleteUserService};
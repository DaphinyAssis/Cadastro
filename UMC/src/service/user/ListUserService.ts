import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/user/CreateUserRepository";

class ListUserService{
    async execute (){
        const  usersRepositories=getCustomRepository (UsersRepositories);
        const users = await usersRepositories
        .createQueryBuilder ("user")
        .leftJoinAndSelect ("user.profile", "profile")
        .getMany();
        return users;
    }
}
export {ListUserService};
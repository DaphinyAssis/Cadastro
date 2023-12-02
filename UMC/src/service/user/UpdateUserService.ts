import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/user/CreateUserRepository";
import {hash} from "bcryptjs";
interface IUserRequest {
    id: string;
    name: string;
    email: string;
    admin?: boolean;
    password: string;
  }
  
  class UpdateUserService {
    async execute({ id, name,admin = false, password }: IUserRequest) {
     
      const usersRepository = getCustomRepository(UsersRepositories);
      const userAlreadyExists = await usersRepository.findOne({
        id,
      });
    
      if (!userAlreadyExists){
        throw new Error ("User not exists") }
        const passwordHash = await hash (password, 8)
       userAlreadyExists.name=name;
       userAlreadyExists.admin=admin;
       userAlreadyExists.updated_at=new Date();
       userAlreadyExists.password=passwordHash;

       const user = await usersRepository.update(id, userAlreadyExists)
       return user;
      
      
    }
  }
  
  export { UpdateUserService };
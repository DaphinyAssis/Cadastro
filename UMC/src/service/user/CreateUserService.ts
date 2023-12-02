import { UsersRepositories } from "../../repositories/user/CreateUserRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
  }
  
  class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
     console.log("app")
      const usersRepository = getCustomRepository(UsersRepositories);

      if (!email) {
        throw new Error("Email incorrect");
      }
  
       var vuser = {
       id:1, name:name, email:email, admin:admin, password:password
      }
      const passwordHash= await hash(password, 8);
      console.log(passwordHash);
      console.log("app")
      const user=usersRepository.create(
        {
          name,
          email,
          admin,
          password: passwordHash,
        });
      await usersRepository.save(user);
      return user;
    }
  }
  
  export { CreateUserService };
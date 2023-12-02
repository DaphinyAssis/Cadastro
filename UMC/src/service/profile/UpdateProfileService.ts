import { getCustomRepository } from "typeorm";
import { ProfilesRepositories } from "../../repositories/profile/CreateProfileRepository";
import {hash} from "bcryptjs";
interface IProfileRequest {
    id: string;
    email: string;
    password: string;
  }
  
  class UpdateProfileService {
    async execute({ id, email, password}: IProfileRequest) {
     
      const profilesRepository = getCustomRepository(ProfilesRepositories);
      const profileAlreadyExists = await profilesRepository.findOne({
        id,
      });
    
      if (!profileAlreadyExists){
        throw new Error ("Profile not exists") }
        
       profileAlreadyExists.email=email;
       profileAlreadyExists.password=password;
       

       const profile = await profilesRepository.update(id, profileAlreadyExists)
       return profile;
      
      
    }
  }
  
  export { UpdateProfileService };
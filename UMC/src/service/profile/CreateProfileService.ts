import { ProfilesRepositories } from "../../repositories/profile/CreateProfileRepository";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface IProfileRequest {
    email: string;
    password:string;
   
  }
  
  class CreateProfileService {
    async execute({ email, password}: IProfileRequest) {
     console.log("app")
      const profilesRepository = getCustomRepository(ProfilesRepositories);

      console.log("app")
      const profile=profilesRepository.create(
        {
          email,
          password
         
        });
      await profilesRepository.save(profile);
      return profile;
    }
  }
  
  export { CreateProfileService };
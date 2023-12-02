import { getCustomRepository } from "typeorm";
import { ProfilesRepositories } from "../../repositories/profile/CreateProfileRepository";

class ListProfileService{
    async execute (){
        const profilesRepositories=getCustomRepository (ProfilesRepositories);

        const profiles = await profilesRepositories.find();
        return profiles;
    }
}
export {ListProfileService};
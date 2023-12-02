import { getCustomRepository } from "typeorm";
import { ProfilesRepositories } from "../../repositories/profile/CreateProfileRepository";

interface IProfileDelete {
    id:string;
}
class DeleteProfileService {
    async execute ({id}:IProfileDelete){
        const profilesRepository = getCustomRepository(ProfilesRepositories);
        const profileAlreadyExists = await profilesRepository.findOne({
            id,
        });
        if (!profileAlreadyExists){
            throw new Error ("Profile not exists");
        }
        const ret = await profilesRepository.delete(id);
        var messagmsgeDelete = {
            message:"Registro excluido com sucesso"
        }
        return messagmsgeDelete;
    }
}
export {DeleteProfileService};
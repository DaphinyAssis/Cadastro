import { EntityRepository, Repository } from "typeorm";
import { Profile} from "../../entities/Profile";

@EntityRepository(Profile)
class ProfilesRepositories extends Repository<Profile>{}

export {ProfilesRepositories};
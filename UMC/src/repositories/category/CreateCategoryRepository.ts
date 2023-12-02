import { EntityRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";

@EntityRepository(Category)
class CategorysRepositories extends Repository<Category>{}

export {CategorysRepositories};
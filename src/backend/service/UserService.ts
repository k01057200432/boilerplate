import { BoilerplateDB } from "@/backend/data-source";
import { Repository } from "typeorm";
import { InsertResult } from "typeorm/browser";
import { User } from "../entities/User";

export class UserService {
    repo!: Repository<User>;
    static async init() {
        const boilerplateDB = await BoilerplateDB()
        const service = new UserService();
        service.repo = boilerplateDB.getRepository(User)
        return service
    }

    async save(
        { id, firstName, lastName, age }: { id: number | undefined, firstName: string, lastName: string, age: number }
    ) {
        const user = new User()
        user.id = id
        user.firstName = firstName
        user.firstName = firstName
        user.lastName = lastName
        user.age = age
        const result: InsertResult = await this.repo.upsert(user, ['id'])
        const [{ id: resultID }] = result.identifiers
        return resultID;

    }

    async list() {
    return await this.repo.find()
}
    async getUserById(id: number) {
    return await this.repo.findOneBy({ id })
}
}
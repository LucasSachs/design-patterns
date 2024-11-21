import { CreateUserType, UserType } from "../type/user.type.js";
import { UserRepositoryBase } from "./base/user.repository.base.js";
import { User } from "../entity/user.entity.js";
import { Database } from "../database/connection.js";

export class UserRepository implements UserRepositoryBase {
    async createNewUser(usuario: CreateUserType): Promise<UserType> {
        const databaseInstance =  await Database.getInstance();
        const userRepository = databaseInstance.getRepository(User);

        const user = userRepository.create(usuario);
        return await userRepository.save(user);
    }

    async updateUser(user: UserType): Promise<UserType> {
        const databaseInstance = await Database.getInstance();
        const userRepository = databaseInstance.getRepository(User);

        const userToUpdate = await userRepository.findOne({ where: { id: user.id } });
        if (!userToUpdate) {
            throw new Error("Usuário não encontrado");
        }
        
        userToUpdate.firstName = user.firstName;
        userToUpdate.lastName = user.lastName;

        return await userRepository.save(userToUpdate);
    }
}
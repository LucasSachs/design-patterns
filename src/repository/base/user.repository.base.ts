import { CreateUserType, UserType } from "../../type/user.type.js";

export abstract class UserRepositoryBase {
    abstract createNewUser(usuario: CreateUserType): Promise<UserType>
    abstract updateUser(user: UserType): Promise<UserType>
    abstract receiveMessage(message: string, sender: UserType, users: UserType[]): Promise<void>
}

import { CreateUserType, UserType } from "../../type/user.type.js";

export abstract class UserRepositoryBase {
    abstract createNewUser(usuario: CreateUserType): Promise<UserType>
    abstract updateUser(user: UserType): Promise<UserType>
}
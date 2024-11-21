import { UserRepository } from "../repository/user.repository.js";
import { CreateUserType } from "../type/user.type.js";

export class UserService {
    constructor (private readonly userRepository: UserRepository) {}

    public async funcaoAleatora(newUser: CreateUserType) {
        return await this.userRepository.createNewUser(newUser)
    }
}

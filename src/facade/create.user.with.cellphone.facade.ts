import { PhoneRepository } from "../repository/phone.repository.js";
import { UserRepository } from "../repository/user.repository.js";
import { CreatePhoneType, PhoneType } from "../type/phone.type.js";
import { CreateUserType, UserType } from "../type/user.type.js";

/*
    Aqui está sendo utilizado o design pattern de FACADE, uma vez que
    o método createUserWithCellphone(...) está simplificando a execução
    de vários outros métodos em apenas um, ou seja, nesse caso ele está
    criando um novo usuário e um telefone para esse usuário com apenas
    uma chamada de função, no caso createUserWithCellphone(...)
*/

export class CreateUserWithCellphoneFacade {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly phoneRepository: PhoneRepository
    ) {}

    async createUserWithCellphone(firstName: string, lastName: string, phoneNumber: string): Promise<PhoneType> {
        const user: CreateUserType = {
            firstName,
            lastName
        }

        const savedUser = await this.userRepository.createNewUser(user);

        const phone: CreatePhoneType = {
            number: phoneNumber,
            user: savedUser
        }

        return await this.phoneRepository.createNewPhone(phone);
    }
}
import { UserRepository } from "../repository/user.repository.js";
import { UserType } from "../type/user.type.js";

/*
    Aqui foi utilizado o padrão OBSERVER, onde essa classe vai ficar
    observado a criação de cada usuário, e quando o método setNewName(...)
    for chamado, ele vai desencadear uma ação nos usuários, nesse caso vai
    alterar o nome dos usuários que foram adicionados.
*/

export class UserObserver {
    constructor(private readonly userRepository: UserRepository) {}

    private users: UserType[] = [];

    public setNewName(newName: string): void {
        this.users.forEach(user => {
            this.userRepository.updateUser({
                ...user,
                firstName: newName
            });
        });
    }

    public addUser(user: UserType): UserType[] {
        this.users.push(user);
        return this.users;
    }
}
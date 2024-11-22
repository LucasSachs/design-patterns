import { User } from "../entity/user.entity.js";
import { UserRepository } from "../repository/user.repository.js";
import { UserType } from "../type/user.type.js";
import { UserMediatorBase } from "./base/user.mediator.base.js";

/*
    Aqui foi utilizado o padrão Mediator para criar um chatroom,
    onde os usuários podem enviar mensagens uns para os outros.
    Nesse contexto o mediator serve como mediador de um usuário para
    todos os outros que estejam no chatroom.
*/

export class ChatRoom implements UserMediatorBase {
    private users: UserType[] = [];

    constructor(private readonly userRepository: UserRepository) {}

    public registerUser(user: User): void {
        this.users.push(user);
    }

    public sendMessage(message: string, sender: User): void {
        this.userRepository.receiveMessage(message, sender, this.users);
    }
}

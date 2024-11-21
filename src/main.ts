import { CreateUserWithCellphoneFacade } from "./facade/create.user.with.cellphone.facade.js";
import { UserObserver } from "./observer/user.observer.js";
import { PhoneRepository } from "./repository/phone.repository.js";
import { UserRepository } from "./repository/user.repository.js";

async function main() {
    try {
        const userRepository = new UserRepository();
        const phoneRepository = new PhoneRepository();

        const facade = new CreateUserWithCellphoneFacade(userRepository, phoneRepository);
        console.log(await facade.createUserWithCellphone('Lucas', 'Sachs', '42999948125'))

        const userObserver = new UserObserver(userRepository);

        const user1 = await userRepository.createNewUser({
            firstName: 'Teste',
            lastName: 'Sobrenome Teste'
        })

        const user2 = await userRepository.createNewUser({
            firstName: 'Teste2',
            lastName: 'Sobrenome Teste2'
        })

        const user3 = await userRepository.createNewUser({
            firstName: 'Teste3',
            lastName: 'Sobrenome Teste3'
        })

        userObserver.addUser(user1);
        userObserver.addUser(user2);
        userObserver.addUser(user3);

        userObserver.setNewName('NomeAleatorio_' + (Math.random() * 1000).toFixed(0));
    } catch(error) {
        return console.log(error)
    }
}

await main();

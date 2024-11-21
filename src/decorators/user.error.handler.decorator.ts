interface funcaoUsuario {
    criarUsuario(): void
}

class UserErrorHandlerDecorator {
    decorate(testando: funcaoUsuario) {
        try {
            testando.criarUsuario();
        } catch (error) {
            console.log(error);
        }
    }
}

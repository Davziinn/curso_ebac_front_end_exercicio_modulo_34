describe('Testando funcionalidades de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('João');
        cy.get('input[placeholder="Telefone"]').type('123456789');
        cy.get('input[placeholder="Email"]').type('joao@example.com');
        cy.get('button').contains('Adicionar').click();

        cy.contains('João').should('exist');
        cy.contains('123456789').should('exist');
    });
    it('Deve editar um contato existente', () => {
        cy.contains('João').parent().find('button').contains('Editar').click();
        cy.get('input[placeholder="Nome"]').clear().type('João Silva');
        cy.get('button').contains('Salvar').click();
        cy.contains('João Silva').should('exist');
    });
    it('Deve remover um contato existente', () => {
        cy.contains('João Silva').parent().find('button').contains('Excluir').click();
        cy.contains('João Silva').should('not.exist');
    });
});

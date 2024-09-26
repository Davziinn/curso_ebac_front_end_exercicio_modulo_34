describe('Testando a inclusão de contatos', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        
      // Preenche os campos do formulário
        cy.get('input[placeholder="Nome"]').type('Novo Contato');
        cy.get('input[placeholder="E-mail"]').type('contato@exemplo.com');
        cy.get('input[placeholder="Telefone"]').type('123456789');
    
      // Clica no botão de adicionar
        cy.get('button[type="submit"]').click();

      // Verifica se o contato foi adicionado corretamente
        cy.contains('Novo Contato').should('exist');
    })
})

describe('Testando a edição de contatos', () => {
    it('Deve editar um contato existente', () => {
      // Clica no botão de editar do primeiro contato
        cy.get('button.edit').first().click();
        
        // Edita os campos do formulário
        cy.get('input[placeholder="Nome"]').clear().type('Contato Editado');
        cy.get('button[type="submit"]').click();
        
        // Verifica se o contato foi editado corretamente
        cy.contains('Contato Editado').should('exist');
    });
})


describe('Testando a exclusão de contatos', () => {
    it('Deve excluir um contato', () => {
      // Clica no botão de deletar do primeiro contato
        cy.get('button.delete').first().click();
        
        // Verifica se o contato foi removido corretamente
        cy.contains('Nome do Contato').should('not.exist');
    })
})

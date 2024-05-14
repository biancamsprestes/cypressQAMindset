describe('Carrinho', () => {
    it('Adicionar produto ao carrinho com sucesso', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        //Act
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.screenshot('produto adicionado')

        //Assert
        cy.get('[data-test="shopping-cart-badge"]')
        .should('be.visible')
        .and('have.text', '1')

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('Remover produto ao carrinho com sucesso', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); //esse usuário induz o erro. trocar para reproduzir corretamente
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.get('.shopping_cart_badge')
          .should('be.visibe');


        //Act
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();

        cy.screenshot('produto removido');

    })


})
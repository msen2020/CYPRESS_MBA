describe('Queriying Tests', () => {
    beforeEach(function () {
        cy.visit('https://example.cypress.io/')
    })

    it('get test', () => {
        cy.get('.home-list').find('li').contains('get').should('be.visible')
        cy.get('.home-list').find('li').contains('get').click()
        cy.get('#query-btn').should('contain', 'Button')

    })

    it('contain test', () => {
        cy.get('.home-list').find('li').contains('contains').should('be.visible')
        cy.get('.home-list').find('li').contains('contains').click()
        cy.get('.query-list').contains('bananas').should('have.class', 'third')

    })
    it('within test', () => {
        cy.get('.home-list').find('li').contains('within').should('be.visible')
        cy.get('.home-list').find('li').contains('within').click()

        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        })

    })

})
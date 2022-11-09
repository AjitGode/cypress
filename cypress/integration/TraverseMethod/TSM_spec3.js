
/// <reference types="cypress" />


describe('Traverse method', () => {

    //prev()
    it('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev()
            .should('have.text', 'Tea')
            .and('have.id', 'tea')
    })

    //next()
    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next()
            .should('have.text', 'Espresso')
            .and('have.id', 'espresso')
    })

    //sibllings()
    it('To get all sibling DOM elements of elements, use the .siblings() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').siblings().should('have.length', 4)
    })

    //prevAll()
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length', 6)
    })

    //nextAll()
    it('To get all next sibling DOM elements within elements, use the .nextAll() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length', 10)
    })


    //prevUntil()
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#coffee').should('have.length', 3)
    })

    //nextUntil()
    it.only('To get all next sibling DOM elements within elements until other element, use the .nextUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length', 3)
    })

})
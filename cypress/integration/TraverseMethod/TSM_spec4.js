
/// <reference types="cypress" />

describe('traverse Method', () => {
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
    it('To get all next sibling DOM elements within elements until other element, use the .nextUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length', 3)
    })


    //filter()
    it('To get DOM elements that match a specific selector, use the .filter() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states')
            .children()
            .filter('.disabled')
            .should('have.text', 'Warning')
    })
    //not()
    it('To remove DOM element(s) from the set of elements, use the .not() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states')
            .children()
            .not('.disabled')
            .should('have.length', 3)
    })

    //find()
    it.only('To get descendant DOM elements of the selector, use the .find() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01')
            .find('th')
            .first()
            .should('have.text', 'Firstname')
    })
})


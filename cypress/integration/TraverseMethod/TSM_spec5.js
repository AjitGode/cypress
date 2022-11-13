
/// <reference types="cypress" />

describe('Traverse Method',()=>{
    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-group.btn-group-toggle').children().filter('.active').should('have.text','Button-1')
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('th').first().should('have.text','Firstname')
    })

    it.only('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
       cy.get('.btn-group.btn-group-toggle').children()
       .not('.active').should('have.length',3)
    })

    it.only('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
       cy.get('.traversal-buttons').children().not('[role="button"]').should('have.length',4)
    })

})
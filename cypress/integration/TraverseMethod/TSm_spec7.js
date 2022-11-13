
/// <reference types="cypress" />

describe('Traverse method',()=>{
    
    //parent() -- immidiate parent
    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').parent().should('have.class','thumbnail')
    })

    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#main-header').parent().should('have.class','container')
    })

    //closest -- ancenstor
    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').closest('div[class="thumbnail"]').should('have.class','thumbnail')
    })

    //parents 
    it('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parents('div').should('have.class','thumbnail')
    })

    //parentsUntil()
    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.sales').parentsUntil('div[class="container"]').should('have.length',4) 
    })
})
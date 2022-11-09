/// <reference types="cypress" />

describe('Traverse method',()=>{

    //children()
    it('To get children of DOM elements, use the .children() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().should('have.length',4) 
    })

    //first()
    it('To get the first DOM element within elements, use the .first() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().first().should('have.text','Finance')
    })

    //last()
    it('To get the last DOM element within elements, use the .last() command',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().last().should('have.text','Sales')
    })

    //eq()
    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(3)
        .should('have.text','Espresso')
        .and('have.attr','id','espresso')
    })

    //siblings

    //prev()
    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev()
        .should('have.text','Tea')
        .and('have.attr','id','tea')

    })

    //next()
    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next()
        .should('have.text','Espresso')
        .and('have.attr','id','espresso')

    })

    //sibling
    it.only('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').siblings().should('have.length',4)

    })
})
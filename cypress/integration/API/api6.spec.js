

/// <reference types="cypress" />

describe('Verify the comment buutons',()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
    })
    it('Verify the Get Comment',()=>{
        cy.get('.network-btn.btn.btn-primary').click()
        cy.get('.network-comment').should('be.visible').and('contain','laudantium enim')
    })

    it('Verify the Post Comment',()=>{
        cy.get('.network-post.btn.btn-success').click()
        cy.get('.network-post-comment').should('be.visible').and('contain','POST successful!')
    })

    it.only('Verify the Update Comment',()=>{
        cy.get('.network-put.btn.btn-warning').click()
        cy.url().should('contain','network-requests')
    })
})
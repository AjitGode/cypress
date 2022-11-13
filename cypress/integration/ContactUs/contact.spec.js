
/// <reference types="cypress" />

describe('verify the contacus form',()=>{
    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

    })

    it('verify the contactus with valid details',()=>{
       cy.get('input[name="first_name"]').type('Ajit')
       cy.get('input[name="last_name"]').type('Gode')
       cy.get('input[name="email"]').type('xyz@gmail.com')
       cy.get('textarea[name="message"]').type('frontend')
       cy.get('input[type="submit"]').click()
       cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')
    })

    it('verify the contactus with Invalid details',()=>{
        cy.get('input[name="first_name"]').type('Ajit')
        cy.get('input[name="last_name"]').type('Gode')
        cy.get('input[name="email"]').type('xyz.com')
        cy.get('textarea[name="message"]').type('frontend')
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain','Error')
     })

     it('verify the contactus with reset functionality',()=>{
        cy.get('input[name="first_name"]').type('Ajit')
        cy.get('input[name="last_name"]').type('Gode')
        cy.get('input[name="email"]').type('xyz@gmail.com')
        cy.get('textarea[name="message"]').type('frontend')
        cy.get('input[type="reset"]').click()
        
        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
     })

     it.only('verify the heading for contactus page',()=>{
        cy.get('h2[name="contactme"]').should('be.visible').and('have.text','CONTACT US')
     })
})
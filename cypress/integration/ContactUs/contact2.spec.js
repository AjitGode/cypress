
/// <reference types="cypress" />

describe('Verify the contactus form functionality',()=>{
    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('Verify contact us form with valid details',()=>{
        cy.get('input[name="first_name"]').type('Ajit')
        cy.get('input[name="last_name"]').type('Gode')
        cy.get('input[name="email"]').type('abc@gmail.com')
        cy.get('textarea[name="message"]').type('Front End Dev')
        cy.get('input[type="submit"]').click()
        cy.get('#contact_reply').should('contain','Thank You for your Message!')
        cy.url().should('contain','thank-you.html')
        cy.title().should('contain','Gianni Bruno - Designer')
    })

    it('Verify contact us form with invalid email',()=>{
        cy.get('input[name="first_name"]').type('Ajit')
        cy.get('input[name="last_name"]').type('Gode')
        cy.get('input[name="email"]').type('abcgmail.com')
        cy.get('textarea[name="message"]').type('Front End Dev')
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain','Error')

    })

    it.only('Verify contact us form with reset fnctionality',()=>{
        cy.get('input[name="first_name"]').type('Ajit')
        cy.get('input[name="last_name"]').type('Gode')
        cy.get('input[name="email"]').type('abc@gmail.com')
        cy.get('textarea[name="message"]').type('Front End Dev')
        cy.get('input[type="reset"]').click()
        
        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
       

    })
})
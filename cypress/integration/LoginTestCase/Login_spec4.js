
describe('login functionality', ()=> {

    it('verify with valid credentials',()=> {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.title').should('be.visible')

    })
    it('verify with invalid credentials', ()=> {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type("standard_us")
        cy.get('#password').type("secret_sau")
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')
    })
})
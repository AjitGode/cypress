

// <reference types="cypress" />



describe('Verify the login functionality', () => {
    it('verify the login with valid credential', () => {
        cy.visit('http://www.testyou.in/Login.aspx')
        cy.get('input[name="ctl00$CPHContainer$txtUserLogin"]').type('ajitgode25')
        cy.get('input[name="ctl00$CPHContainer$txtPassword"]').type('Ajit@9925')
        cy.get('input[name="ctl00$CPHContainer$btnLoginn"]').click()
        cy.get('div[class="logo"]').should('be.visible')
        cy.get('img[src="../Student/Images/DashBoard/dashbord_heading.png"]').should('be.visible')
        cy.get('#ctl00_CPHContainer_spFirstName').should('have.text', 'ajit')
    })

    it('verify the login with Invalid credential', () => {
        cy.visit('http://www.testyou.in/Login.aspx')
        cy.get('input[name="ctl00$CPHContainer$txtUserLogin"]').type('ajitgode99')
        cy.get('input[name="ctl00$CPHContainer$txtPassword"]').type('Ajit@1234')
        cy.get('input[name="ctl00$CPHContainer$btnLoginn"]').click()
    })
})


describe('Verify the login funcionality',()=>{
    it('verify login with valid credentilas',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('div[class="app_logo"]').should('be.visible')
        cy.url().should('contains','inventory.html')
        cy.get('span[class="title"]').should('have.text','Products')
    })

    it.only('verify login with Invalid credentilas',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_userrr')
        cy.get('#password').type('secret_sauce234')
        cy.get('#login-button').click()
        cy.get('h3[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
})

//Implicit ---- should
//Explicit -----Expect
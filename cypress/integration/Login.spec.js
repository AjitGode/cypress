// javascript is object oriended language

// cy ---- cy is object and object has property and methods


describe("verify the login functionality",()=>{
    
    it("Verify the login functionality with valid credential",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('img[alt="client brand banner"]').should('be.visible')
    })
})
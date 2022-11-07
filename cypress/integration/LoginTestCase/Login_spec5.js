
describe('Verify the login Functionality',()=>{
    it('verify the login with valid credentials',()=>{
        cy.visit('https://www.zoomin.com/')
        cy.get('img[src="https://images.zoomin.com/webresources/images/img/Menu.png"]').click()
        cy.get('a[class="orange-text pr-1"]').click()
        cy.get('input[name="email"]').type('godeajit95@gmail.com')
        cy.get('input[name="password"]').type('Ajit@2543')
        cy.get('span[class="MuiButton-label"]').click()
        cy.get('img[src="https://images.zoomin.com/webresources/images/img/Profile.svg"]').should('be.visible')
        cy.get('h1[class="products-subtitle "]').should('have.text','Best Sellers')
        cy.url().should('contain','zoomin')
    })

    it('verify the login with Invalid credentials',()=>{
        cy.visit('https://www.zoomin.com/')
        cy.get('img[src="https://images.zoomin.com/webresources/images/img/Menu.png"]').click()
        cy.get('a[class="orange-text pr-1"]').click()
        cy.get('input[name="email"]').type('godeajit71@gmail.com')
        cy.get('input[name="password"]').type('Ajit@25435')
        cy.get('span[class="MuiButton-label"]').click()
        cy.get('div[class="Toastify__toast-container Toastify__toast-container--top-right"]').should('be.visible')
        cy.url().should('contain','sign-in') 
    })

    it('verify the login with blank credentials',()=>{
        cy.visit('https://www.zoomin.com/')
        cy.get('img[src="https://images.zoomin.com/webresources/images/img/Menu.png"]').click()
        cy.get('a[class="orange-text pr-1"]').click()
        cy.get('input[name="email"]').should('have.value','')
        cy.get('input[name="password"]').should('have.value','')
        cy.get('span[class="MuiButton-label"]').click()

    })
})
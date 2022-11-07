
// Netflix 


describe('Verify the Netflix login functionality',()=>{
    it('verify login with valid credentials',()=>{
        cy.visit('https://www.netflix.com/in/')
        cy.get('a[class="authLinks redButton"]').click()
        cy.get('label[for="id_userLoginId"]').type('godeajit71@gmail.com')
        cy.get('label[for="id_password"]').type('Ajit@9925')
        cy.get('button[type="submit"]').click()
        cy.get('span[class="profile-name"]').click()
    })
})
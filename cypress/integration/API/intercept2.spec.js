/// <reference types="cypress" />

describe('Verify the GET and POST Api',()=>{
    it('Verify the GET Api',()=>{

        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@getComment').then(({request,response})=>{
            // cy.log(request)
            // expect(request.method).to.equal('GET')
            // expect(request.headers.host).to.equal("jsonplaceholder.cypress.io")

            cy.log(response)
            //(response.statusCode).to.equal(200)
            expect(response.body.body).to.equal('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium')
            expect(response.body).to.have.keys(['body','email','postId','id','name'])
        })
        cy.get('.network-comment').should('be.visible').and('contain','laudantium')
    })
})

/// <reference types="cypress" />


describe("verify the GET and POST method",()=>{

    it('Verify the Get Comment',()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.get('.network-comment').should('be.visible').and('contain','laudantium enim')
    })
    
    it('verify the GET comment UI',()=>{

        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@getComment').then(({request,response})=>{
            
           // cy.log(response)

            // response ----

            expect(response.statusCode).to.equal(200)
            expect(response.body).to.keys(['postId','id','name','email','body'])

            // request ----
             cy.log(request)
             expect(request.method).to.equal('GET')
             expect(request.headers.host).to.equal("jsonplaceholder.cypress.io")
        })
        cy.get('.network-comment').should('contain','laudantium')
    })

    it('Verify the POST comment API',()=>{

        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@postComment').then(({request,response})=>{
            expect(request.method).to.equal('POST')
            expect(request.headers.host).to.equal("jsonplaceholder.cypress.io")
            
            cy.log(response)
            
        })
        cy.get('.network-post-comment').should('be.visible').and('contain','POST successful!')
    })

    it.only('Verify the PUT comment API',()=>{

        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('putComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-put.btn.btn-warning').click()
        cy.wait('@putComment').then(({request,response})=>{
            cy.log(request)
            expect(request.method).to.equal('PUT')
            expect(request.headers.host).to.equal("jsonplaceholder.cypress.io")
            
        })
        cy.url().should('contain','network-requests')
    })
})
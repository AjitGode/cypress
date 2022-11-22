

/// <reference types="cypress" />

describe('Verify API',()=>{
    it('GET Comment ',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(({body,status})=>{
            //cy.log(status)
            expect(status).to.equal(200)
        })
    })

    it('POST Comment ',()=>{
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "godeajit99@gmail.com",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
              }
        }).then(({body,status})=>{
            //cy.log(status)
            expect(status).to.equal(201)
        })
    })

    it.only('PUT Comment ',()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "godeajit95@gmail.com",
                "body": "javascript is fun"
              }
        }).then(({body,status})=>{
            //cy.log(status)
            expect(status).to.equal(200)
        })
    })
})
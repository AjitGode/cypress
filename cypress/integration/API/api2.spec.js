/// <reference types="cypress" />

describe('Verify the users API', () => {
    it('Retrive user page wise', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((res) => {
            expect(res.status).to.equal(200)
        })
    })

    it('Create user', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                name: "Ajit G",
                job: "Frontend Developer"
            }
        }).then((res) => {
            expect(res.status).to.equal(201)
        })
    })

    it('Update user', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/328",
            body: {
                name: "Ajit Gode",
                job: "Testing"
            }
        }).then((res) => {
            expect(res.status).to.equal(200)
        })
    })
    it.only('Delete USer', () => {
        cy.request({
             method:"DELETE",
             url:"https://reqres.in/api/users/327",

        }).then((res)=>{
            expect(res.status).to.equal(204)
        })
    })
})
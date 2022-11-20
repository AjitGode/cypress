
/// <reference types="cypress" />

describe('verify the user APIs',()=>{
    it('Retrive user page wise',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            // cy.log(res)
            expect(res.status).to.equal(200)
        })
    })

    it('Create user',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users/390",
            body:{
                name: "Ajit",
                job: "Tester"
            }
        }).then((res)=>{
            // cy.log(res)
            expect(res.status).to.equal(201)
        })
    })
    it('Update user',()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                name: "Ajit G",
                job: "zion resident"
            }
        }).then((res)=>{
            expect(res.status).to.equal(200)
        })
    })
    it.only('Delete User',()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/390"
        }).then((res)=>{
            expect(res.status).to.equal(204)
        })
    })
})
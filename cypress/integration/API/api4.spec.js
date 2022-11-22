
/// <reference types="cypress" />

describe('Verify status code of API',()=>{
    it('Verify the status code of GET API',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            // cy.log(res)
            expect(res.status).to.equal(200)
        })
    })

    it('Verify the status code of POST API',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                name: "Ajit G",
                job: "Frontend Developer"
            }
        }).then((res)=>{
            // cy.log(res)
            expect(res.status).to.equal(200)
        })
    })

    it('Verify the status code of PUT API',()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/328",
            body:{
                name: "Ajit Gode",
                job: "Angular Developer"
            }
        }).then((res)=>{
            // cy.log(res)
            expect(res.status).to.equal(200)
        })
    })

    it.only('Verify the status code of DELETE API',()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/327",
        }).then((res)=>{
            // cy.log(res)
            expect(res.status).to.equal(204)
        })
    })
})
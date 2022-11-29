
/// <reference types="cypress" />

describe('Verify the gores APIs',()=>{
    let data
    let data2
    before(()=>{
        cy.fixture('createUser').then((obj)=>{
            data = obj
        })
        cy.fixture('createUser').then((obj)=>{
            data2 = obj
        })
    })
    it('Verify the GET Api',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                
            }
        }).then((res)=>{
            // cy.log(res)
            expect(res.status).to.equal(200)
        })
    })

    it('Verify the Create User',()=>{
        data.email = `ajit${Math.random()*6}@gmail.com`
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            body:data,
            headers:{
                
            }
        }).then((res)=>{
            expect(res.status).to.equal(201)
        })
    })

    it('Verify the Update User',()=>{
        data2.email = `ajit${Math.random()*6}@gmail.com`
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/2100",
            body:data2,
            headers:{
                
            }
        }).then((res)=>{
            expect(res.status).to.equal(200)
        })
    })

    it.only('Verify the Delete User',()=>{
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/2100",
            headers:{
               
            }
        }).then((res)=>{
            expect(res.status).to.equal(204)
        })
    })
})
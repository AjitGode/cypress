/// <reference types="cypress" />

describe('Verify the goresApi',()=>{
    let email
    it.only('Verify the GET Api',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                //Authorization:"Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(200)
            expect(res.body.length).to.equal(10)
        })
    })

    it('Verify the Create user Api',()=>{
        email=`ajit${Math.random()*6}@gmail.com`,
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            body:{
                name:"Tenali Ramakrishna",
                gender:"male", 
                email:email, 
                status:"active"
           },
            headers:{
                //Authorization:"Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(201)
        })
    })

    it('Verify the Update user Api',()=>{
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/34",
            body:{
                name:"Tenali Ramakrishna",
                gender:"male", 
                email:"ABC23@gmail.com", 
                status:"active"
           },
            headers:{
               // Authorization:"Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(200)
        })
    })
    it('Verify the Delete User api',()=>{
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/2098",
            headers:{
                //Authorization:"Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(204)
            expect(res.duration).to.be.lessThan(600)
        })
    })
})
/// <reference types="cypress" />

describe('Verify Get update delete api',()=>{
    it('Verify the Get update delete',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers: {
                //Authorization: "Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
            }
        }).then((res)=>{
           return  res.body[0].id   
        }).then((id)=>{
            cy.request({
                method:"PUT",
                url:`https://gorest.co.in/public/v2/users/${id}`,
                body:{
                    name:"Ajit G",
                    gender:"male", 
                    email:`ajit${Math.random()*3}@gmail.com`, 
                    status:"active"
                },
                headers: {
                    //Authorization: "Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
                }
            }).then((res)=>{
                //cy.log(res)
                return res.body.id
            })
            .then((id)=>{
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers:{
                        //Authorization: "Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
                    }
                }).then((res)=>{
                    expect(res.status).to.equal(204)
                })
            })
        })
    })
})
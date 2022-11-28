/// <reference types="cypress" />

describe('Verify the APIs',()=>{
    it('Verify the GET Api',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(200)
           // expect(res.duration).to.be.lessThan(700)
           expect(res.body.data[1].first_name).to.equal("Lindsay")
        })
    })

    it('Verify the User per Page',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            //cy.log(res)
            expect(res.status).to.equal(200)
            expect(res.body.per_page).to.equal(res.body.data.length)
        })
    })

    it('Verify the keys in Object',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            //cy.log(res)
             res.body.data.forEach(el => {
                //cy.log(el)
                expect(el).to.have.keys('id','email','first_name','last_name','avatar')
             });
        })
    })

    it.only('Verify the POST API',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                name: "Ajit G",
                job: "Frontend Developer"
            }
        }).then((res)=>{
            //cy.log(res)
            expect(res.status).to.equal(201)
            expect(res.body).to.have.keys('createdAt','id','job','name')

            for(let val of Object.values(res.body)){
                expect(val).not.to.be.null
            }
        })
    })
})
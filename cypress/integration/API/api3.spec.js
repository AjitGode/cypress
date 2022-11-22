
/// <reference types="cypress" />

describe('verify the user API',()=>{
    it.only('count the user per page',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(200)
            expect(res.body.per_page).to.equal(res.body.data.length)
            expect(res.duration).to.be.lessThan(50)
            expect(res.body.data[1].first_name).to.equal("Lindsay")
        })
    })

    it('Validate keys in object',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            //cy.log(res.body.data[1].email)
            res.body.data.forEach(element => {
                expect(element).to.have.keys('id','email','first_name','last_name','avatar')
                
            });

        })
    })

    it('Validate keys in object',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:
            {
                name:"Ajit g",
                job: "Frontend Developer"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equal(201)
            expect(res.body).to.have.keys("name",'id','job',"createdAt")
            //expect(res.body.id).not.to.be.null

            for(let val of Object.values(res.body)){
                expect(val).not.to.be.null
            }

        })
    })
})
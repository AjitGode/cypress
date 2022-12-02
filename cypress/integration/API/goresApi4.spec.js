/// <reference types="cypress" />

describe('Create update delete user', () => {
    it('Create update delete user', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `xyz${Math.random() * 6}@gmail.com`,
                status: "active"
            },
            headers: {
                //Authorization: "Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
            }
        }).then((res) => {
            //cy.log(res.body.id)
            return res.body.id
        })
            .then((id) => {
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    body: {
                        name: "Tenali krishna",
                        gender: "male",
                        email: `xyz${Math.random() * 6}@gmail.com`,
                        status: "active"
                    },
                    headers: {
                        //Authorization: "Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
                    }
                }).then((res) => {
                    // cy.log(res)
                    return res.body.id
                })
                    .then((id) => {
                        cy.request({
                            method: "DELETE",
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            headers: {
                               // Authorization: "Bearer abe6f14ed90582adb77fd14c315afcde567e5c9e46f1d5475d5127ba0262b345"
                            }
                        }).then((res) => {
                            expect(res.status).to.equal(204)
                        })
                    })
            })
    })
})
/// <reference types="cypress" />
import data from "../../fixtures/contact"

describe('Verify the contactus form', () => {
    data.forEach((element, index) => {
        it.only(`verify the contactus with reading fixture for particular testcase${index}`, () => {

            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(element.name)
            cy.get('input[name="last_name"]').type(element.lname)
            cy.get('input[name="email"]').type(element.email)
            cy.get('textarea[name="message"]').type(element.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('be.visible').and('have.text', 'Thank You for your Message!')

        })

    })

    // it.only('verify the contactus with reading fixture for particular testcase', () => {

    //     cy.fixture('contact2').then((arr)=>{
    //         //cy.log(arr)
    //         arr.forEach(element => {
    //             cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //             cy.get('input[name="first_name"]').type(element.name)
    //             cy.get('input[name="last_name"]').type(element.lname)
    //             cy.get('input[name="email"]').type(element.email)
    //             cy.get('textarea[name="message"]').type(element.message)
    //             cy.get('input[type="submit"]').click()
    //             cy.get('h1').should('be.visible').and('have.text', 'Thank You for your Message!')

    //         });

    //     })

    // })
})
/// <reference types="cypress" />

describe('verify the contacus form', () => {

    // let info = {
    //     name: "Ajit",
    //     lname: "Gode",
    //     email: "abc@gmail.com",
    //     message: "I am learning cypress"
    // }
    let dataA
    before(()=>{
        cy.fixture('contactus').then((obj)=>{
            dataA = obj
        })
    })
    it.only('verify the contactus with reading fixture for particular testcase', () => {
        cy.log(dataA)
        //cy.fixture('contactus').then((obj)=>{
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            // cy.get('input[name="first_name"]').type(obj.name)
            // cy.get('input[name="last_name"]').type(obj.lname)
            // cy.get('input[name="email"]').type(obj.email)
            // cy.get('textarea[name="message"]').type(obj.message)
            // cy.get('input[type="submit"]').click()
            // cy.get('h1').should('be.visible').and('have.text', 'Thank You for your Message!')
        //})

    })
    it.skip('verify the contactus with object value', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.name)
        cy.get('input[name="last_name"]').type(info.lname)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text', 'Thank You for your Message!')
    })
})
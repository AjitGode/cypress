/// <reference types="cypress" />

describe('verify the js alert',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Handle js alert and ok',()=>{
        cy.contains('Click for JS Alert').click()
        cy.on()
    })
})
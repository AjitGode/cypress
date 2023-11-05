/// <reference types="cypress" />

describe('Verify hooks methods',()=>{
    before(()=>{
        cy.log('I am from begore')
    })

    beforeEach(()=>{
        cy.log('I am from beforeach')
    })

    after(()=>{
        cy.log('I am from after hook')
    })
    afterEach(()=>{
        cy.log('I am from aftereach')
    })

    it('TC1 ',()=>{
        cy.log('I am from testcase 1')
    })

    it('TC2 ',()=>{
        cy.log('I am from testcase 2')
    })
})
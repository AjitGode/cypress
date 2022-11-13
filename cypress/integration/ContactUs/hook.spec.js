
/// <reference types="cypress" />

describe('verify the contact us form',()=>{
    before(()=>{
        cy.log('I am executed first')
    })
    after(()=>{
        cy.log('I am executed last')
    })

    beforeEach(()=>{
        cy.log('This is executed before each testcase')
    })

    afterEach(()=>{
        cy.log('This is executed after each test case')
    })
    it('Test case one',()=>{
        cy.log('TestCase One')
    })
    it('TestCase two',()=>{
        cy.log('TestCase Two')
    })
})
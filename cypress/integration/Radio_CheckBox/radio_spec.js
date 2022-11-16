

/// <reference types="cypress" />

describe('verify the functionality of radio buttons and checkbox',()=>{
    beforeEach(()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })

    it('verify the functionality of checkbox using check method',()=>{
        //check
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    })

    it('verify the functionality of checkbox using click method',()=>{
        //check
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').click().should('be.checked')
        cy.get('[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
        cy.get('[value="red"]').click().should('not.be.checked')
    })

    it('check the multiple checkboxes at ones',()=>{
        cy.get('[type="checkbox"]').each((el,index,arr)=>{
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('check the multiple checkboxes at ones',()=>{
        cy.get('[type="checkbox"]').check(['red','yellow','blue','orange','green','purple']).should('be.checked')
        
    })

    it('check the functionality of radio buttons',()=>{
        cy.get('[type="radio"]').first().should('be.checked')
        cy.get('[type="radio"]').eq(1).check().should('be.checked')
        cy.get('[type="radio"]').last().should('not.be.checked')
    })

    it.only('check the functionality of radio buttons',()=>{
        cy.get('[type="radio"]').each((el,index)=>{
            cy.wait(3000)
            cy.wrap(el).check().should('be.checked')
        })
    })
})

/// <reference types="cypress" />

describe('verify radio button , check box , dropdown , enabled ,disabled', () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify radio button functionality', () => {
        //check
        // cy.get('input[value="green"]').check().should('be.checked')
        // cy.get('input[value="purple"]').check().should('be.checked')

        //click
        // cy.get('input[value="green"]').click().should('be.checked')
        // cy.get('input[value="blue"]').should('not.be.checked')

        cy.get('#radio-buttons').children().filter('input').each((el) => {
            // cy.log(el)
            cy.wait(3000)
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('verify the checkbox functionality', () => {
        //click 
        // cy.get('input[value="option-1"]').click().should('be.checked')

        //check()
        // cy.get('input[value="option-2"]').check().should('be.checked')

        //uncheck()
        // cy.get('input[value="option-3"]').uncheck().should('not.be.checked')

        // cy.get('input[type="checkbox"]').check().should('be.checked')
        // cy.wait(2000)
        // cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

        //value attribute
        cy.get('input[type="checkbox"]').check(['option-1','option-4']).should('be.checked')
        cy.wait(2000)
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-4']).should('not.be.checked')
    })

    it.only('verify the dropdown box functionality',()=>{
        // cy.get('#dropdowm-menu-1').select('python')
        // cy.wait(2000)
        // cy.get('#dropdowm-menu-1').select('java')
        let i = ['python','maven','css']

        cy.get('.section-title').first().children().each(($dr,index)=>{
            cy.wrap($dr).select(i[index])
        })
    })
})
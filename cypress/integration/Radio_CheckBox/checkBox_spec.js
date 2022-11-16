
/// <reference types="cypress" />

describe('Validate the functionality for checkboxex and radiobuttons',()=>{
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('Verify the checkbox with click method',()=>{
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.wait(5000)
        cy.get('input[value="option-1"]').click().should('not.be.checked')
    })

    // checked(),unchecked()

    it('verify the checkbox with checked and unchecked',()=>{
        cy.get('input[value="option-1"]').check().should('be.checked')
        cy.wait(5000)
        cy.get('input[value="option-1"]').uncheck().should('not.be.checked')
    })

    it('verify the checkbox multiple selection with check and uncheck method',()=>{
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4',]).should('be.checked')
        cy.wait(3000)
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4',]).should('not.be.checked')
    })

    //radio button with check method

    it.only('verify the radio button with check method',()=>{
        // cy.get('#radio-buttons').find('input').each(el=>{
        //     cy.wrap(el).check().should('be.checked')
        // })

        // cy.get('#radio-buttons input[value="green"]').check().should('be.checked')
        // cy.get('#radio-buttons input[value="blue"]').check().should('be.checked')

        cy.get('#radio-buttons').children().filter('input').each(el=>{
            cy.wrap(el).check().should('be.checked')
        })
    })
})
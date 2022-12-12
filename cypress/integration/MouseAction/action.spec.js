/// <reference types="cypress" />

describe('Validation of mouse click functionality',()=>{
    it('Verify the functionality of scrollintoview',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#datepicker').scrollIntoView()
    })
    it('Verify the drag and drop functionality',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').wait(1000).click()
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable>p>b').should('have.text','Dropped!')
    })
    it('Verify the  double click',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').wait(1000).click()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.class','div-double-click double')
    })

    it.only('Verify the functionality of mouseDown',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').wait(1000).click()
        cy.get('#click-box').trigger('mousedown',{which:1})
        cy.get('#click-box').should('have.text','Well done! keep holding that click now.....')
        cy.get('#click-box').trigger('mouseup')
        cy.get('#click-box').should('have.text','Dont release me!!!')
    })
})
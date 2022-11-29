/// <reference types="cypress" />

describe('Verify the calender functionality',()=>{
    it('verify the calender',()=>{

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        let date = new Date()
        date.setDate(date.getDate()+200)
        let day = date.getDate()
        let month = date.getMonth() +1
        let year = date.getFullYear()
        let monthText = date.toLocaleString('default',{ month:'long' })
        let monthYear = `${monthText} ${year}`

        // cy.log(date)
        // cy.log(day)
        // cy.log(month)
        // cy.log(monthText)
        // cy.log(year)

       
        cy.get('#datepicker').click()
        function getYear(){
            cy.get('.datepicker-switch').first().then((el)=>{
               //cy.log(el.text())
               if(!el.text().includes(monthYear)){
                cy.get('.next').first().click()
                getYear()
               }
            })
        }
        getYear()
        cy.get('.day').contains(day).click()
        cy.get('#datepicker').click()
        cy.get('.datepicker-switch').first().should('have.text',monthYear)
        cy.get('.active.day').should('have.text',day)
    })
})
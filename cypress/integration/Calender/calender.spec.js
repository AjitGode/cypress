
/// <reference types="cypress" />

describe('Verify the calender functionality', () => {
    it('verify the calender', () => {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')

        let date = new Date()
        date.setDate(date.getDate() + 300)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let monthText = date.toLocaleString('default', { month: 'long' })
        // cy.log(date)
        // cy.log(day)
        // cy.log(month)
        // cy.log(year)
        // cy.log(monthText)
        cy.get('#datepicker').click()
        function getMonthYear() {
            cy.get('.datepicker-switch').first().then((el) => {
                //cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    getMonthYear()
                }
            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(monthText)) {
                        cy.get('.next').first().click()
                        getMonthYear()
                    }
                })
            })
        }
        getMonthYear()

        function getDate(){
            // cy.get('.day').contains(day).click()
            cy.contains(day).click()
        }
        getDate()
    })
})
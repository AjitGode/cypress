
/// <reference types="cypress" />

describe('verify the table functionality', () => {
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('verify the total sum of price column', () => {
        let sum = 0
        cy.get('[name="BookTable"]').find('tr').each((el, index) => {
            //cy.log(el.children('td').last().text())

            sum = sum + Number(el.children('td').last().text())
        }).then(() => {
            expect(sum).to.equal(7100)
        })

    })
    it.only('verify the total sum of price column', () => {
        let names = []
        let text1
        cy.get('[name="BookTable"]').find('tr').each((el, index) => {
            //cy.log(el.children('td').eq(1).text())
            if(index !=0){
            text1 = el.children('td').eq(1).text()
            names.push(text1)
        }
        }).then(()=>{
            
        })
    })
})
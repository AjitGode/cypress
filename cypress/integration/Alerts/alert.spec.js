

/// <reference types="cypress" />

describe('verify the js alert', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Handling JS alerts and click ok', (() => {
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', function (str) {
            expect(str).to.equal('I am a JS Alert')
            return true
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    }))

    it('Handling JS confirm and click ok', (() => {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function (str) {
            expect(str).to.equal('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    }))

    it('Handling JS confirm and click cancle', (() => {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function (str) {
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    }))

    it('Handling js promt and click ok', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('I am learning js')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: I am learning js')
    })

    it('Handling JS alerts and click ok', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'alert').returns(true)
            cy.contains('Click for JS Alert').click()
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('Handling JS alerts and click ok', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'confirm').returns(true)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it.only('Handling JS alerts and click ok', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'confirm').returns(false)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
})
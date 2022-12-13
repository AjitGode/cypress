/// <reference types="cypress" />

describe('validate the iframe functionality',()=>{
    it('Validate ifrmae with jquery method',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el)=>{
            //cy.log(el)
            let body = el.contents().find('body')
            cy.wrap(body).as('iframebody')
            cy.get('@iframebody').find('[href="products.html"]').should('have.text','Our Products')
        })
    })

    it.only('validate iframe with javascript functionality',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el)=>{
           // cy.log(el)

           let body = el['0'].contentDocument.body
           cy.wrap(body).as('Iframebody')
           cy.get('@Iframebody').find('[href="products.html"]')
           .should('be.visible').and('have.text','Our Products')

           cy.get('@Iframebody').find('[href="../Contact-Us/contactus.html"]')
           .should('be.visible').and('have.text','Contact Us')

           cy.get('@Iframebody').find('[href="index.html"]')
           .should('be.visible').and('have.text','Home')
        })
    })

})
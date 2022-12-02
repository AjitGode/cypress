describe('https://www.amazon.in/',()=>{
 before(()=>{
    cy.clearCookies()
 })  
it('To verify search functionality',()=>{
    let searchStr='iphone 13'
    let criteria=`256GB`
    let eltext1='';
    cy.visit('https://www.amazon.in/')
    cy.get('.nav-search-field').type(searchStr)
    cy.wait(2000)
    cy.get('.s-suggestion').should('be.visible').each(function(el){
            
            if(el.text().trim().toLocaleLowerCase().includes(searchStr)){
                cy.wrap(el).click()
                return false ;
            }
    })
    cy.get('.a-size-mini span').each((el)=>{
        if(el.text().trim().includes(criteria)){
            eltext1=el.text().trim()
            console.log(eltext1)
            cy.wrap(el).parent('a').invoke('removeAttr','target').click({force:true})
            return false
        }
    }).then(()=>{
        cy.get('#productTitle').should('contain',eltext1)
        cy.get('#add-to-cart-button').click()
        cy.get('#attach-close_sideSheet-link').click()
        cy.get('#nav-cart').click()
        cy.get('.a-truncate-cut').should('contain',eltext1)
        
    })
    
})

})
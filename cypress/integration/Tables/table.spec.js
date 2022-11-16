
/// <reference types="cypress" />

describe('verify the table functionality',()=>{

    function verifyTable(id,expected){
        let sum = 0;
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get(`#${id}`).find('tr').each(($el,index)=>{
            if(index !=0){
            //  cy.log($el.children().last().text())
             sum = sum + Number($el.children().last().text())
            }
        }).then(()=>{
            expect(sum).to.equal(expected)
        })
    }
    it('verify the sum of age in table',()=>{

        // let sum = 0;
        // cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // cy.get('#t01').find('tr').each(($el,index)=>{
        //     if(index !=0){
        //     //  cy.log($el.children().last().text())
        //      sum = sum + Number($el.children().last().text())
        //     }
        // }).then(()=>{
        //     expect(sum).to.equal(159)
        // })
        verifyTable('t01',159)
        
    })

    it('verify the sum of age in table',()=>{

        // let sum = 0;
        // cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // cy.get('#t02').find('tr').each(($el,index)=>{
        //     if(index !=0){
        //     //  cy.log($el.children().last().text())
        //      sum = sum + Number($el.children().last().text())
        //     }
        // }).then(()=>{
        //     expect(sum).to.equal(163)
        // })
        verifyTable('t02',163)
    })
    
})
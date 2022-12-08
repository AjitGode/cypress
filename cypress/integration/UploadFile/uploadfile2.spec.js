/// <reference types="cypress" />

describe('Verify upload file fnctionality',()=>{
    let file = "Profile.pdf"
    let documents = ['Profile.pdf','AduResume.pdf','javascript-interview.pdf','Software Developer Opening.pdf']
    it('TC01 uploadFile',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(file)
        cy.get('#file-submit').click()
        cy.get('.example>h3').should('contain','File Uploaded!')
        cy.get('#uploaded-files').should('contain',file)
    })
    it('TC02 uploadFile',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(documents)
        cy.get('#fileList>li').should('have.length',documents.length)
        cy.get('a[target="_top"]').last().should('have.text', 'Multiple File Upload Input')
    })
    it.only('TC02 uploadFile',()=>{
        let file = "Profile.pdf"
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile({filePath:file,fileName:"AjitGode"})
        cy.get('a[target="_top"]').last().should('have.text', 'Multiple File Upload Input')
    })
})
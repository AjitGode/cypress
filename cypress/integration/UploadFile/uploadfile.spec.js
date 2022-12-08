/// <reference types="cypress" />
let uploadFile = "Profile.pdf"
let documents = ['Profile.pdf','AduResume.pdf','javascript-interview.pdf','Software Developer Opening.pdf']


describe('Verify the upload file',()=>{
    it('verify Upload file',()=>{
        cy.visit('https://www.automationexercise.com/login')
        cy.get('[placeholder="Email Address"]').first().type('godeajit99@gmail.com')
        cy.get('[name="password"]').type('Ajit@9925')
        cy.get('[data-qa="login-button"]').click()
        cy.get('[href="/contact_us"]').click()
        cy.get('[name="name"]').type('Ajit')
        cy.get('[name="email"]').type('godeajit99@gmail.com')
        cy.get('[name="subject"]').type('Testing')
        cy.get('#message').type('Upload pdf file')
        cy.get('[name="upload_file"]').attachFile(uploadFile)
        cy.get('[name="submit"]').click()
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
    })

    it('verify upload file',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(documents)
        cy.get('a[target="_top"]').last().should('have.text', 'Multiple File Upload Input')
    })

    it.only('verify upload file',()=>{
        let file = "Admin_Activity.PNG"
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('.is-selected').click()
        cy.get('#file').attachFile(file)
        cy.contains('Done! ').should('be.visible')
    })
})
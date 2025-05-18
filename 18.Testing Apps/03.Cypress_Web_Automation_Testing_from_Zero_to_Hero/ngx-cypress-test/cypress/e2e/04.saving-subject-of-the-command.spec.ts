import { navigateToForm } from "./02.types-of-locators.spec"

describe("First test suite", () => {
    it('save subject of the command', () => {
        navigateToForm();
        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', "Email")
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', "Password")

        // Cypress is Async and you cannot do things like this instead using cypress alias or cypress then methods
        // const usingTheGridForm = cy.contains('nb-card', 'Using the Grid')
        // usingTheGridForm.find('[for="inputEmail1"]').should('contain', "Email")
        // usingTheGridForm.find('[for="inputPassword2"]').should('contain', "Password")

        // cypress alias 
        cy.contains('nb-card', 'Using the Grid').as("usingTheGrid")
        cy.get('usingTheGrid').find('[for="inputEmail1"]').should('contain', "Email")
        cy.get('usingTheGrid').find('[for="inputPassword2"]').should('contain', "Password")

        // cypress the() method
        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', "Email")
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', "Password")
        })
    })

    
})
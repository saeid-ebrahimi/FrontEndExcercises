import { navigateToForm } from "./02.types-of-locators.spec"

describe("first test suite", () =>{
    it("test radio buttons", () => { 
        navigateToForm()
        cy.contains('nb-card', "Using the Grid").as("usingTheGridFrom")
        cy.get("@usingTheGridFrom").find('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons).eq(0).check({force:true}).should("be.checked")
            cy.wrap(radioButtons).eq(1).should("not.be.checked")
            cy.wrap(radioButtons).eq(2).should("not.be.checked")
            cy.wrap(radioButtons).eq(2).should("be.disabled")

            cy.wrap(radioButtons).eq(1).check({force:true}).should("be.checked")
            cy.wrap(radioButtons).eq(0).should("not.be.checked")
            cy.wrap(radioButtons).eq(2).should("not.be.checked")
            cy.wrap(radioButtons).eq(2).should("be.disabled")
        })
        
    })
})
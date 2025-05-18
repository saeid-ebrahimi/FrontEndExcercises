import { navigateToForm } from "./02.types-of-locators.spec"

describe("first test suite", () => {
    it.only('extract text values', () => {
        navigateToForm()
        
        // 1 
        cy.get('[for="exampleInputEmail1]"').should("contain", "Email Address")

        // 2 
        cy.get('[for="exampleInputEmail1]"').then((label) => {
            // use jquery methods
            const labelText = label.text()
            expect(labelText).to.equal("Email address")
            // use cypress methods
            cy.wrap(labelText).should('contain', "Email address")
        })

        // 3
        cy.get('[for="exampleInputEmail1"]').invoke("text").then(text => {
            expect(text).to.equal("Email address")
        })

        cy.get('[for="exampleInputEmail1"]').invoke("text").as("labelText").should('contain', "Email address")


        // 4
        cy.get('[for="exampleInputEmail"]').invoke('attr', 'class').then(classValue => {
            expect(classValue).to.equal('label')
        })

        // 5. Invoke property
        cy.get("#exampleInputEmail1").type("test@test.com")
        cy.get('#exampleInputEmail1').invoke("prop", "value").should("contain", "test@test.coom")
        cy.get('#exampleInputEmail1').invoke("prop", "value").then((property) => {
            expect(property).to.equal("test@test.com")
        })
    })
})
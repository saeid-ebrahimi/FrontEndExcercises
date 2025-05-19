describe("first test suit", () => {
    it("test Lists and Dropdowns", () => {
        cy.visit("/")
        cy.get("nav nb-select").click()
        cy.get(".options-list").contains("Dark").click()
        cy.get("nav nb-select").should("contain","Dark")

        // 2 
        cy.get("nav nb-select").then(dropdown => {
            cy.wrap(dropdown).click()
            cy.get(".options-list nb-option").each((listItem, index )=> {
                const itemText = listItem.text().trim()
                cy.wrap(listItem).click()
                cy.wrap(dropdown).should("contain",itemText)
                if(index < 3)
                    cy.wrap(dropdown).click()
            })
        })
    })  
})
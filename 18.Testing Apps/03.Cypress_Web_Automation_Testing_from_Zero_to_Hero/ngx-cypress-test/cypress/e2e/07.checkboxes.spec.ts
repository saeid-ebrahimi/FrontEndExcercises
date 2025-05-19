
function navigateToModalsToasterTab(){
    cy.visit("/")
    cy.contains("Modal & Overlays").click()
    cy.contains("Toastr").click()
}

describe("first test suit", () => {
    it.only("test checkboxes", () => {
        navigateToModalsToasterTab()
        cy.contains('nb-card', "Toaster configuration").as("toasterConfigCard")
        cy.get("@toasterConfigCard").find('[type="checkbox"]').then( checkboxes => {
            cy.wrap(checkboxes).eq(0).should("be.checked")
            cy.wrap(checkboxes).eq(0).parent(".label").click()
            cy.wrap(checkboxes).eq(0).should("not.be.checked")

            cy.wrap(checkboxes).eq(1).should("not.be.checked")
            cy.wrap(checkboxes).eq(1).click({force: true})
            cy.wrap(checkboxes).eq(1).should("be.checked")
            cy.wrap(checkboxes).eq(1).uncheck({force:true}).should("not.be.checked")
            cy.wrap(checkboxes).eq(2).should("be.checked")

        })
        
    })
})
export function navigateToForm() {
    cy.visit('/')
    cy.contains("Forms").click()
    cy.contains("Form Layouts").click()
}
describe("First test suite", () => {
    it("second test", () => {
        navigateToForm()

        // Theory
        // get() -> find elements on the page by locators globally
        // find() -> find child element by locators
        // contains() -> find first HTML text and by text and locator

        cy.contains(/sign in/i)
        cy.contains('[status="warning"]', /sign in/i)
        cy.contains('nb-card',"Horizontal form").find("button")
        cy.contains('nb-card',"Horizontal form").contains("Sign in")
        cy.contains('nb-card',"Horizontal form").get("button")   // finds all buttons in current page

        // cypress chains and DOM
        cy.get('#inputEmail3')
            .parents("form")
            .find("button")
            .should('contain', "Sign in")
            .parents("forms")
            .find("nb-checkbox")
            .click()

    })
})
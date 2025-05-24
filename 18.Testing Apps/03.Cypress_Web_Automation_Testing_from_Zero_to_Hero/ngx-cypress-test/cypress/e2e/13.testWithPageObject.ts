import { navigateTo } from "../support/page_objects/navigationPage"

describe("Test with Page objects", () =>{
    beforeEach("open Application" , () => {
        cy.visit("/")

    })
    it("verify navigation across pages", () => {
        navigateTo.formLayoutsPage();
        navigateTo.dataPickerPage();
        navigateTo.smartTablePage();
        navigateTo.tooltipPage();
        navigateTo.toasterPage();
    } )
})
describe("first tets suit", () => {
  it("test tooltips", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Tooltip").click();
    cy.contains("nb-card", "Colored Tooltips").contains("Default").click();
    cy.get("nb-tooltip").should("contain", "This is a tooltip");
  });
});

describe("first test suit", () => {
  it("test web table", () => {
    cy.visit("/");
    cy.contains("Tables").click();
    cy.contains("Smart Table").click();

    // 1. Get the row by text
    cy.get("tbody")
      .contains("tr", "Larry")
      .then((tableRow) => {
        cy.wrap(tableRow).find(".nb-edit").click();
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type("32");
        cy.wrap(tableRow).find(".nb-checkmark").click();
        cy.wrap(tableRow).find("td").eq(6).should("contain", "32");
      });

    // 2. Get the row by index
    cy.get("thead").find(".nb-plus").click();
    cy.get("thead tr")
      .eq(2)
      .then((tableRow) => {
        cy.wrap(tableRow).find('[placeholder="First Name"]').type("James");
        cy.wrap(tableRow).find('[placeholder="Last Name"]').type("Cameron");
        cy.wrap(tableRow).find('[placeholder="Username"]').type("JCameron22");
        cy.wrap(tableRow)
          .find('[placeholder="E-mail"]')
          .type("Cameron22@gmail.com");
        cy.wrap(tableRow).find('[placeholder="Age"]').type("22");
        cy.wrap(tableRow).find(".nb-checkmark").click();
      });
    cy.get("tbody tr")
      .first()
      .find("td")
      .then((tableCols) => {
        cy.wrap(tableCols).eq(1).should("contain", "");
        cy.wrap(tableCols).eq(2).should("contain", "James");
        cy.wrap(tableCols).eq(3).contains("Cameron");
        cy.wrap(tableCols).eq(4).contains("JCameron22");
        cy.wrap(tableCols).eq(5).contains("Cameron22@gmail.com");
      });

    // 3. Get each row validation
    const ages = ["20", "30", "40", "200"];
    ages.forEach((age) => {
      cy.get('thead [placeholder="Age"]').clear().type(age);
      cy.wait(500);
      cy.get("tbody tr").each((tableRow) => {
        if (age === "200") {
          cy.wrap(tableRow).should("contain", "No data found");
        } else {
          cy.wrap(tableRow).find("td").eq(6).should("contain", age);
        }
      });
    });
  });
});

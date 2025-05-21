import { onDatepickerPage } from "./../support/page_objects/datepickerPage";
import { onFormLayoutPage } from "../support/page_objects/formLayoutsPage";
import { navigateTo } from "../support/page_objects/navigationPage";

describe("Test with Page Objects", () => {
  beforeEach("open application", () => {
    cy.visit("/");
  });

  it("verify navigation across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.dataPickerPage();
    navigateTo.toasterPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });

  it.only("should submit Inline and Basic form and select tomorrow date in the calender", () => {
    // navigateTo.formLayoutsPage();
    // onFormLayoutPage.submitInlineFormWithNameAndEmail("Eve", "Eve@test.com");
    // onFormLayoutPage.submitBasicFormWithEmailAndPassword(
    //   "jimmy@test.com",
    //   "2026j"
    // );
    navigateTo.dataPickerPage();
    onDatepickerPage.selectCommonDatepickerDateFromToday(20);
    onDatepickerPage.selectDatepickerWithRangeFromToday(2, 30);
  });
});

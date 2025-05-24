import { onDatePickerPage } from "../support/page_objects/datepickerPage";
import { onFormLayoutPage } from "../support/page_objects/formLayoutsPage";
import { navigateTo } from "../support/page_objects/navigationPage";
import { onSmartTablePage } from "../support/page_objects/smartTablePage";

describe("Test with Page Objects", () => {
  beforeEach("open application", () => {
    cy.visit("/");
  });

  it("should submit Inline and Basic form and select tomorrow date in the calendar", () => {
    navigateTo.formLayoutsPage();
    onFormLayoutPage.submitInlineFormWithNameAndEmail(
      "Aragon",
      "aragon@test.com"
    );
    onFormLayoutPage.submitBasicFormWithEmailAndPassword(
      "test@test.com",
      "password@1234"
    );

    navigateTo.dataPickerPage();
    onDatePickerPage.selectCommonDatepickerDateFromToday(100);
    onDatePickerPage.selectDatePickerWithRangeFromToday(202, 300);

    navigateTo.smartTablePage();
    onSmartTablePage.addNewRecordWithFirstAndLastName("Jim", "Carry");
    onSmartTablePage.updateAgeByFirstName("Jim", 56);
    onSmartTablePage.deleteRowByIndex(1);
  });
});

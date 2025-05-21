function selectDayFromCurrent(day: number) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  let futureDay = date.getDate();
  let futureMonth = date.toLocaleString("default", { month: "short" });
  let dateAssert = futureMonth + " " + futureDay + ", " + date.getFullYear();
  cy.get("nb-calender-navigation")
    .invoke("attr", "ng-reflect-date")
    .then((dateAttribute) => {
      if (!dateAttribute.includes(futureMonth)) {
        cy.get("[date-name='chevron-right']").click();
        selectDayFromCurrent(day);
      } else {
        cy.get(".date-cell").not(".bounding-month").contains(futureDay).click();
      }
    });
  return dateAssert;
}
class DatepickerPage {
  selectCommonDatepickerDateFromToday(dayFromToday: number) {
    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        let dateAssert = selectDayFromCurrent(dayFromToday);
        cy.wrap(input).invoke("prop", "value").should("contain", dateAssert);
      });
  }

  selectDatepickerWithRangeFromToday(firstDays: number, secondDays: number) {
    cy.contains("nb-card", "Datepicker with Range")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        let dateAssertFirst = selectDayFromCurrent(firstDays);
        let dateAssertSecond = selectDayFromCurrent(secondDays);
        const finalDate = dateAssertFirst + " - " + dateAssertSecond;
        cy.wrap(input).invoke("prop", "value").should("contain", finalDate);
      });
  }
}

export const onDatepickerPage = new DatepickerPage();

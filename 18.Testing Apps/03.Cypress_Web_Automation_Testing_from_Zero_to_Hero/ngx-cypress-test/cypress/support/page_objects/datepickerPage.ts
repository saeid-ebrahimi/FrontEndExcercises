function selectDayFromCurrent(day:number){
        let date = new Date()
        date.setDate(date.getDate() + day)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleString("default", {month: "short"})
        let dateAssert = futureMonth+" "+futureDay+", "+ date.getFullYear()
        cy.get('nb-calendar-navigation').invoke("attr", "ng-reflect-date").then(dateAttribute => {
            if( !dateAttribute.includes(futureMonth)){
                cy.get('[data-name="chevron-right"]').click()
                selectDayFromCurrent(day)
            }else{
                cy.get(`.day-cell`).not(".bounding-month").contains(futureDay).click()
            }
        })
        return dateAssert;
}
export class DatepickerPage{
    
    selectCommonDatepickerDateFromToday(dayFromToday: number){
        cy.contains("nb-card", "Common Datepicker").find("input").then(input => {
            cy.wrap(input).click()
            let dateAssert = selectDayFromCurrent(dayFromToday)
            cy.wrap(input).invoke("prop", "value").should("contain", dateAssert)
            cy.wrap(input).should("have.value", dateAssert)
        })
    }

    selectDatePickerWithRangeFromToday(startDay:number, endDay: number){
        cy.contains('nb-card', "Datepicker With Range").find("input").then(input => {
            cy.wrap(input).click()

            let startDateAssert = selectDayFromCurrent(startDay)
            let endDateAssert = selectDayFromCurrent(endDay)
            let finalDateAssert = startDateAssert + " - "+ endDateAssert

            cy.wrap(input).invoke("prop", "value").should("contain", finalDateAssert)
            cy.wrap(input).should("have.value", finalDateAssert)

        })
    }
}

export const onDatePickerPage = new DatepickerPage()
export function navigateToFormsDatepickerTab(){
    cy.visit("/")
    cy.contains("Forms").click()
    cy.contains("Datepicker").click()
}

describe("first test suit", ()=> { 
    
    
    function selectDayFromCurrent(days:number){
        const desireDate = new Date()
        desireDate.setDate(desireDate.getDate() + days)

        const futureDay = desireDate.getDate()
        const futureMonth = desireDate.toLocaleDateString("en-US", {month: "short"})
        const futureYear = desireDate.getFullYear()
        const expectedResult = `${futureMonth} ${futureDay}, ${futureYear}`
        function findCurrentDate(){
            cy.get('nb-calendar-navigation').invoke("attr", "ng-reflect-date").then(dateAttribute =>{
                if(!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear.toString())){
                    cy.get('nb-icon[ng-reflect-icon="chevron-right-outline"]').click()
                    findCurrentDate()
                }else{
                    cy.get(".day-cell").not('.bounding-month').contains(futureDay).click()
                }
            })
        }
        findCurrentDate()
        return expectedResult
    }
    it.only("test datepicker", () => {
        navigateToFormsDatepickerTab()
        cy.contains('nb-card', "Common Datepicker").find("input").then( input => {
            cy.wrap(input).click()
            const expectedResult = selectDayFromCurrent(700)
            cy.wrap(input).invoke("prop", "value").should("contain",expectedResult)
            cy.wrap(input).should("have.value", expectedResult )  
        })
    })
})
const $ = document
const weightRange = $.getElementById("weight")
const heightRange = $.getElementById("height")
const weightValue = $.getElementById("weight-val")
const heightValue = $.getElementById("height-val")
const resultElem = $.getElementById("result")
const categoryElem = $.getElementById("category")


function calcBMI(){
    
    const weight = weightRange.value
    weightValue.innerText = weight + "kg"
    const height = heightRange.value 
    heightValue.innerText = height + "cm"
    const BMI = (weight)/((height*height)/10000)
    console.log(weight)
    resultElem.innerText = BMI.toPrecision(3)
    if (BMI < 18.5){
        categoryElem.innerText = "UnderWeight"
        resultElem.style.color = "#ffc44d"
    }else if(BMI >= 18.5 && BMI <= 24.9){
        categoryElem.innerText = "Normal Weight"
        resultElem.style.color = "#0be881"
    }else if(BMI >= 25 && BMI < 29.9){
        categoryElem.innerText = "Over Weight"
        resultElem.style.color = "#ff884d"
    }else{
        categoryElem.innerText = "Obesse"
        resultElem.style.color = "#ff5e4d"
    }
}
weightRange.addEventListener("change",calcBMI)
weightRange.addEventListener("input",calcBMI)
heightRange.addEventListener("change",calcBMI)
heightRange.addEventListener("input",calcBMI)

const divElem = document.querySelector(".box")
// to access inline html attributes
console.log(divElem.style.width)
console.log(divElem.style.borderColor)

const divElemStyle = getComputedStyle(divElem)  // or window.getComputedStyle()
console.log(divElemStyle.backgroundColor)
console(divElemStyle.getPropertyValue("width"))
const boxElem = document.querySelector('.box')

// console.log(boxElem.style); // Just for inline styles

let boxElemStyles = getComputedStyle(boxElem)

// console.log(boxElemStyles.backgroundColor);


let boxElemWidth = getComputedStyle(boxElem).getPropertyValue('width')

console.log(boxElemWidth);
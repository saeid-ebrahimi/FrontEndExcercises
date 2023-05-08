const boxElem = document.querySelector('.box')

// console.log(boxElem.style); // Just for inline styles in html tag

let boxElemStyles = getComputedStyle(boxElem)

// common way
console.log(boxElemStyles.backgroundColor); // for inline or external or internal styles

// non-common way to get style properties
let boxElemWidth = getComputedStyle(boxElem).getPropertyValue('width')

console.log(boxElemWidth);
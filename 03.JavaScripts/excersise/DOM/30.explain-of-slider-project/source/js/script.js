const $ = document;
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let sliderItem = $.querySelectorAll(".slider-item");
let index = 0;
// console.log(sliderItem);

function prevItem() {
    index--
    sliderItem[index + 1].classList.remove('active')
    if (index < 0) {
        index = sliderItem.length - 1
    }
    sliderItem[index].classList.add('active')
    console.log(index);
}
function nextItem() {
  index++;
  sliderItem[index - 1].classList.remove('active')
  if (index > sliderItem.length - 1) {
    index = 0;
  }
  sliderItem[index].classList.add("active");
}

setInterval(nextItem , 4000)
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);

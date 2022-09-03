
let head1 = document.getElementById("one")
let head2 = document.getElementById("two")
let head3 = document.getElementById("three")

head1.addEventListener("mouseover", function (){
    head1.textContent = "Mouse currently Over Me!!"
    head1.style.color = "cyan"
})
head1.addEventListener("mouseout", function (){
    head1.textContent = "MOUSE OVER ME"
    head1.style.color = "black"
})
head2.addEventListener("click",function (){
    head2.textContent = "Clicked On"
    head2.style.color = "blue"
})
head3.addEventListener("dblclick", function (){
    head3.textContent = "Double Clicked"
    head3.style.color = "magenta"
    head3.style.textDecoration = "underline"
})

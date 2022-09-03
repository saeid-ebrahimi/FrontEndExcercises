const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  console.log("clicked")
  // Hint: Add 'dark' class to body :))
  document.body.classList.toggle("dark")
  const classN = document.body.className
  if (classN.includes("dark")){
    localStorage.setItem("theme","dark")
  }else
  {
    localStorage.setItem("theme","light")
  }
  
})
document.body.onload = function(){
  if (localStorage.getItem("theme") === "dark")
    document.body.classList.add("dark")
}

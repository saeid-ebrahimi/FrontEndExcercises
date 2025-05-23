function userScroll(){
    const navBar = document.querySelector(".navbar")
    const toTopBtn = document.querySelector("#to-top")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100){
            navBar.classList.add("bg-light")
            navBar.classList.add('navbar-sticky')
            toTopBtn.classList.add("show")
        }else{
            navBar.classList.remove("bg-light")
            navBar.classList.remove('navbar-sticky')
            toTopBtn.classList.remove("show")
        }
    })
}
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}
function incrementStats(){
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        counter.innerText = 0;
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const c = +counter.innerText;

            const increment = target / 200;
            if (c < target){
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1)
            }else{
                counter.innerText = target;
            }
        }
        updateCounter();
    },)

}
document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", incrementStats);
document.querySelector("#to-top").addEventListener('click', scrollToTop)
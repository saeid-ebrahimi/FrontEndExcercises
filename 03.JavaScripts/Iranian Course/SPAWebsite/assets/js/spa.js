import router from "./router.js";

// console.log(router)
document.addEventListener("click", (event) => {
    event.preventDefault()
    // console.log(event.target.href)
    if(!event.target.className.includes("nav-link")){
        return false
    }
    console.log(event.target.href)
    urlRoutes(event)
})

function urlRoutes(event){
    window.history.pushState({}, "", event.target.href)
    locationHandler();
}
async function locationHandler(){
    const loc = window.location.pathname;
    console.log(loc)
    const home = "/SPA Website"
    const path = loc.replace(home,"").replace(".html", "")
    console.log(path)
    const route = router[path] || router[404]
    // console.log(route)
    const html = await fetch(route.template).then(res => res.text())
    // console.log(html)
    document.write(html)
    document.title = route.title
}
window.onpopstate = locationHandler;
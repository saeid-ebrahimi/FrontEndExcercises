
const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    // fetch use get method as default
    fetch("https://randomuser.me/api/", { method: 'GET'})
        .then( response => {
            if (response.status === 200){
                return response.json()
            }
            return new Error("Error :/")
        })
        .then( data => {
        console.log("Data:", data.results)
        })
        .catch( err => {
            console.log(err)
        })
})
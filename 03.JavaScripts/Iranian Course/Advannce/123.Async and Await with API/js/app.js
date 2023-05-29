// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach((post, index) => {
//             console.log(`Post #${index+1}:`,post)
//         } )
//     })
//

async function getPosts(){
    try {
        let resp = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await resp.json()
        data.forEach((post, index) => {
            console.log(`Post #${index+1}:`,post)
        } )
    }catch (error){
        console.warn("the problem is:",error)
        alert("the problem is: "+error+"\nplease try again!")
    }
}

getPosts()
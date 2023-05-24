let wordPromise = new Promise( (resolve, reject) => {
    let text = "Cydemy"
    if(text){
        resolve(text)
    }else{
        reject(new Error("text is empty"))
    }

})

// console.log(wordPromise)
// wordPromise.then(response => {
//     console.log(response)
//     return response.split("")
// }).then(response2 => {
//     console.log(response2)
//     return response2.reverse()
// }).then(response3 => {
//     console.log(response3)
//     return response3.join("")
// }).then(response4 => {
//     console.log(response4)
// }).catch(err=>{
//     console.log(err)
// })
wordPromise
    .then(response => response.split(""))
    .then(response2 =>  response2.reverse())
    .then(response3 => response3.join(""))
    .then(response4 => {console.log(response4)})
    .catch(err=>{console.log(err)})
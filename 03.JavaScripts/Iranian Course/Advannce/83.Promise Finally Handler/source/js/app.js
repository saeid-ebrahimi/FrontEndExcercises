let books = [
    {id: 1, name: 'Bi Shouri', price: 95000},
    {id: 2, name: 'Shahnameh', price: 400000},
    {id: 3, name: 'Pedar Madar ...', price: 78000},
]

function addBooks (name, price, callback) {
    let newBook = {
        id: books.length + 1,
        name,
        price
    }
    return new Promise((resolve, reject) => {
            setTimeout(function () {
                if(books.push((newBook))){
                    resolve()
                }else{
                    reject()
                }
            })
    }, 4000)
}


addBooks('Golestan', 90_000).then(() => {
    console.log(books)
}).catch(()=> {
    console.log("Cannot add new book :(")
})

// Promise
let myPromise = new Promise((resolve, reject) => {
    let loginFlag = false
    setTimeout(() => {
        console.log("Login Check :)")
        if(loginFlag){
            resolve("You can access users panel")
        }else{
            reject("Your access to panel denied!")
        }
    }, 3000)
})

myPromise
    .then((success) => {
        console.log(success)})
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Promise executed!")
    })

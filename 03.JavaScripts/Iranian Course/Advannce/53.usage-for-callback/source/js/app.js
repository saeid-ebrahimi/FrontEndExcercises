let books = [
    {id: 1, name: 'Bi Shouri', price: 95000},
    {id: 2, name: 'Shahnameh', price: 400000},
    {id: 3, name: 'Pedar Madar ...', price: 78000},
]

function addBooks (name, price, callback) {
    let newBook = {
        id: books.length + 1,
        name: name,
        price: price
    }

    setTimeout(function () {
        books.push(newBook)
        callback()
    }, 4000)
}

function logBooks () {
    console.log(books);
}

addBooks('Golestan', 'Sadi', logBooks)
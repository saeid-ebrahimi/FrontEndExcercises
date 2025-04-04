const $ = document
const titleInp = $.getElementById("title")
const authorInp = $.getElementById("author")
const yearInp = $.getElementById("year")
const bookList = $.getElementById("book-list")
const addBook = $.querySelector("input[type=submit]")
let allBooks = []

window.addEventListener("load", loadBookList)
addBook.addEventListener("click", addRecords)
function addRecords(event){
    event.preventDefault()
    const titleVal = titleInp.value.trim()
    const authorVal = authorInp.value.trim()
    const yearVal = yearInp.value.trim()
    clearInputs()
    if(titleVal && authorVal && yearVal){
        const newBook = {
            id: allBooks.length + 1,
            title: titleVal,
            author: authorVal,
            year:yearVal
        }
        allBooks.push(newBook)
        localStorage.setItem("books", JSON.stringify(allBooks))
        addNewBook(newBook)
    }else{
        alert("invalid value entered")
    }
}
function clearInputs(){
    titleInp.value = ""
    authorInp.value = ""
    yearInp.value = ""
}
function addNewBook(book){
    const tableRow = $.createElement("tr")
    tableRow.innerHTML = `<th>${book.title}</th>
        <td>${book.author}</td>
        <td>${book.year}</td>`
    bookList.append(tableRow)
}
function loadBookList(){
    allBooks = JSON.parse(localStorage.getItem("books"))
    console.log(allBooks)
    if (allBooks){
        allBooks.forEach(function (book){
            addNewBook(book)
        })
    }else{
        allBooks = []
    }

}
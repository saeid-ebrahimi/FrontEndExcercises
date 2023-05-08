const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];

const userListContainer = document.querySelector("#list")
const paginationContainer = document.querySelector("#pagination")

let currentPage = 3
let rowsCount = 5

displayUsersList(listItems,userListContainer, rowsCount, currentPage )
setupPagination(listItems, paginationContainer, rowsCount)
function displayUsersList(allUsersArray, userContainer,rowsCount, currentPage){
    userContainer.innerHTML = ""
    
    const endIndex =  rowsCount * currentPage
    const startIndex = endIndex - rowsCount

    const paginatedUsers = allUsersArray.slice(startIndex, endIndex)
    //console.log(paginatedUsers)
    paginatedUsers.forEach(function(user){
        const userElement = document.createElement("div")
        userElement.innerHTML = user.name + "  " + user.family
        userElement.classList.add("item")
        userContainer.appendChild(userElement)
    })

}

function setupPagination(allUsersArray, pagesContainer, rowsCount){
    pagesContainer.innerHTML = ""
    const pageCount = Math.ceil(allUsersArray.length / rowsCount)
    for( let i=1; i < pageCount + 1; i++){
        const btn = paginationButtonGenerator(i, allUsersArray)
        pagesContainer.appendChild(btn)
    }
}
function paginationButtonGenerator(page, allUsersArray){
    const button = document.createElement("button")
    button.innerHTML = page

    if (page === currentPage){
        button.classList.add("active")
    }
    button.addEventListener("click", function(evt){
            currentPage = page
            const prevBtn = document.querySelector("button.active") 
            prevBtn.classList.remove("active")
            evt.target.classList.add("active")
            //button.classList.add("active")
            displayUsersList(allUsersArray, userListContainer, rowsCount, currentPage)
    })
    return button
}
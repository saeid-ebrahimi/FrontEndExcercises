let $ = document
let autoCompleteWrapper = $.querySelector(".search-input")
let searchInputElem = $.querySelector("input")
let autoCompleteBox = $.querySelector('.autocom-box')

searchInputElem.addEventListener("keyup", function (){
    let searchValue = searchInputElem.value
    if(searchValue){
        autoCompleteWrapper.classList.add("active")
        let filteredWords = suggestions.filter(function (word) {
            return word.toLowerCase().includes(searchValue.toLowerCase())
        })
        // console.log(filteredWords)
        suggestionWordsGenerator(filteredWords)

    }else{
        autoCompleteWrapper.classList.remove("active")
    }

})

function suggestionWordsGenerator(wordsArray) {
    let listItemArray =  wordsArray.map( function (word){
        return "<li>"+word+"</li>"
    })
    let customListItem
    if (!listItemArray.length) {
        customListItem = "<li>"+searchInputElem.value+"</li>"
    }else{
        customListItem = listItemArray.join("")
    }
    autoCompleteBox.innerHTML = customListItem
    select()
}

function select() {
    let allListItems = autoCompleteBox.querySelectorAll("li")

    allListItems.forEach((wordItem) =>{
        wordItem.addEventListener("click", function(evt){
            searchInputElem.value = evt.target.innerText ;
            autoCompleteWrapper.classList.remove("active")
        })
    })

}
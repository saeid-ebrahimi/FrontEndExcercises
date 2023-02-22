rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O","P","Q","R","S","T"]
let html = ""
let counter = 1
let id_counter = 1
const left = document.getElementById("left")
const right = document.getElementById("right")
const middle = document.getElementById("middle")
const left_columns = 3
const right_columns = 3
const middle_columns = 3

rows.forEach(row => {
    html =""
    html += `<div class="label">${row}</div>`

    for( let i=0; i < left_columns;i++){
        html += `<div id="${row.toLowerCase() + id_counter}">${counter}</div>`
        counter++
        id_counter++
        }
    left.innerHTML += html
    html = ""
    for (let i =0; i< middle_columns; i++){
        html += `<div id="${row.toLowerCase() + id_counter}">${counter}</div>`
        counter++
        id_counter++
    }
    middle.innerHTML += html
    html = ""
    for (let i =0;i<right_columns;i++ ){
        html += `<div id="${row.toLowerCase() + id_counter}">${counter}</div>`
        counter++
        id_counter++
    }
    html += `<div class="label">${row}</div>`
    right.innerHTML += html
    id_counter = 1
})
function putSeats(ro,col, idcnt, cnt, section){
    html = ""
    for( let i=0; i < col;i++){
    html += `<div id="${ro.toLowerCase() + idcnt}">${cnt}</div>`
    cnt++
    idcnt++
    }
    section.innerHTML += html
}


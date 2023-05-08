const reservedSeats = {
    record1: {
        seat: "b19",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record2: {
        seat: "b20",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record3: {
        seat: "b21",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
    record4: {
        seat: "b22",
        owner: {
            fname: "Joe",
            lname: "Smith"
        }
    },
};
(function (){
    "use strict"
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O","P","Q","R","S","T"]
    let html = ""
    let counter = 1
    const left = document.getElementById("left")
    const right = document.getElementById("right")
    const middle = document.getElementById("middle")
    const left_columns = 3
    const right_columns = 3
    const middle_columns = 9

    rows.forEach(row =>{
        html = ""
        html += `<div class="label">${row}</div>`

        putSeats(row,left_columns,counter, left)
        counter += left_columns

        putSeats(row,middle_columns, counter, middle)
        counter += middle_columns

        putSeats(row, right_columns, counter, right)
        counter += right_columns

        html += `<div class="label">${row}</div>`
        right.innerHTML += html
        checkReserved(reservedSeats)
    })

    function putSeats(row, col, cnt, section){
        for (let i= 0 ; i< col; i++){
            html += `<div class='a' id="${row.toLowerCase()+cnt}">${cnt}</div>`
            cnt++
        }
        section.innerHTML += html
        html = ""
    }

    function checkReserved(resSeats){
        for(const key in resSeats){
            if(resSeats.hasOwnProperty(key)){
                const resSeat = resSeats[key].seat
                const allRes = document.querySelectorAll(`#${resSeat}`)
                allRes.forEach(res =>{
                    res.className = "r"
                    res.innerHTML = "R"
                })
            }
        }
    }

    return true
})();

setTimeout(function(){
    "use strict"
    let selectedSeats = []
    const seats = document.querySelectorAll(".a")
    const form = document.getElementById("resform")

    seats.forEach(seat =>{
        seat.addEventListener("click",(event)=>{
            event.preventDefault()
            seatSelectionProcess(seat.id)
        })
    })
    document.getElementById("reserve").addEventListener("click",(event)=>{
        event.preventDefault()
        form.style.display = "block"
    })
    document.getElementById("cancel").addEventListener("click",(event)=>{
        event.preventDefault()
        form.style.display = "none"
    })

    document.getElementById("confirm-seats").addEventListener("submit",(event) =>{

        alert("Seats Reserved!")
        processReservation()
        event.preventDefault()
    })

    function seatSelectionProcess(thisSeat){
        if (!document.getElementById(thisSeat).classList.contains("r")) {
            const index = selectedSeats.indexOf(thisSeat)
            const seat = document.getElementById(thisSeat)
            if(index < 0){
                selectedSeats.push(thisSeat)
                seat.setAttribute("class", "s")
            }else{
                selectedSeats.splice(index, 1)
                seat.setAttribute("class", "a")
            }
            manageConfirmForm()
        }

    }
    manageConfirmForm()
    function manageConfirmForm() {
        const conformRes = document.getElementById("confirm-seats")
        let seatsString = selectedSeats.toString()
        seatsString = seatsString.replace(/,/g, ", ")
        seatsString = seatsString.replace(/,(?=[^,]*$)/, " and")
        if (selectedSeats.length > 0) {
            document.querySelector("#resform h2").innerHTML = "Complete This Form to Confirm Your Reservation"
            conformRes.style.display = "block"
            let text
            if (selectedSeats.length === 1)
                text = "seat"
            else
                text = "seats"
            document.getElementById("selected-seats").innerHTML = `You have selected ${text} ${seatsString} `
        } else {
            conformRes.style.display = "none"
            document.querySelector("#resform h2").innerHTML = "Cannot Proceed!!"
            document.getElementById("selected-seats").innerHTML = 'You need to select some seats to reserve.<br><a href="#" id="error">Close</a> this dialog box and pick at least one seat.'
            document.getElementById("error").addEventListener("click", () => {
                document.getElementById("resform").style.display = "none"
            })
        }
    }

    function  processReservation(){
        const hardCodeRecords = Object.keys(reservedSeats).length
        const fname = document.getElementById("fname")
        const lname = document.getElementById("lname")
        let counter = 1
        let nextRecord = ""
        selectedSeats.forEach((seatID) =>{
            const seat = document.getElementById(seatID)
            seat.className = "r"
            seat.innerHTML = "R"
            nextRecord = `record${hardCodeRecords + counter}`
            selectedSeats[nextRecord] = {
                seat : seatID,
                owner:{
                    fname : fname,
                    lname : lname
                }
            }
            counter++
        })
        // clean up
        fname.value = ""
        lname.value = ""
        document.getElementById("resform").style.display = "none"
        selectedSeats = []
        manageConfirmForm()
    }
}, 500)
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

(function(){
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O","P","Q","R","S","T"]
    let html = ""
    let counter = 1
    const left = document.getElementById("left")
    const right = document.getElementById("right")
    const middle = document.getElementById("middle")
    const left_columns = 3
    const right_columns = 3
    const middle_columns = 9

    rows.forEach(row => {
        html =""
        html += `<div class="label">${row}</div>`

        putSeats(row,left_columns,counter,left)
        counter += left_columns

        putSeats(row,middle_columns,counter,middle)
        counter += middle_columns

        putSeats(row,right_columns,counter,right)
        counter += right_columns
        html += `<div class="label">${row}</div>`
        right.innerHTML += html
        checkReserved(reservedSeats)
    })

    function putSeats(ro,col, cnt, section){
        for( let i=0; i < col;i++){
        html += `<div class="a" id="${ro.toLowerCase() + cnt}">${cnt}</div>`
        cnt++
        }
        section.innerHTML += html
        html = ""
    }

    function checkReserved(resSeats){
        for( const key in resSeats){
            if (resSeats.hasOwnProperty(key)) {
                const resSeat = resSeats[key].seat
                const allRes = document.querySelectorAll(`#${resSeat}`)
                allRes.forEach(res =>{
                    res.className = "r"
                    res.innerHTML = "R"
                })
            }
        }
    }
})();

(function (){
    "use strict"
    let selectedSeats = []
    const seats = document.querySelectorAll(".a")
    seats.forEach(seat =>{
        seat.addEventListener("click",(event)=>{
            event.preventDefault()
            seatSelectionProcess(seat.id)
        })
    })
    const form = document.getElementById("resform")
    function seatSelectionProcess(thisSeat){
        if (!document.getElementById(thisSeat).classList.contains("r")) {


            const index = selectedSeats.indexOf(thisSeat)
            const seat = document.getElementById(thisSeat)
            if (index < 0) {
                selectedSeats.push(thisSeat)
                seat.setAttribute("class", "s")
            } else {
                selectedSeats.splice(index, 1)
                seat.setAttribute("class", "a")
            }
            manageConfirmForm()
        }
    }
    document.getElementById("reserve").addEventListener("click",(event)=>{
        event.preventDefault()
        form.style.display = "block"
    })
    document.getElementById("cancel").addEventListener("click",(event)=>{
        event.preventDefault()
        form.style.display = "none"
    })

    function manageConfirmForm(){
        const conformRes = document.getElementById("confirmres")
        let seatsString = selectedSeats.toString()
        seatsString = seatsString.replace(/,/g,", ")
        seatsString = seatsString.replace(/,(?=[^,]*$)/," and")
        if (selectedSeats.length > 0){
            conformRes.style.display = "block"
            let text
            if (selectedSeats.length === 1)
                text = "seat"
            else
                text = "seats"
            document.getElementById("selectedseats").innerHTML = `You have selected ${text} ${seatsString} `
        }
        else{
            conformRes.style.display = "none"
            document.getElementById("selectedseats").innerHTML = 'You need to select some seats to reserve.<br><a href="#" id="error">Close</a> this dialog box and pick at least one seat.'
            document.getElementById("error").addEventListener("click",()=>{
                document.getElementById("resform").style.display = "none"
            })
        }
    }
    manageConfirmForm()
    document.getElementById("confirmres").addEventListener("submit",(event) =>{
        processReservation()
        event.preventDefault()
    })
    function processReservation(){

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
        document.getElementById("resform").style.display = "none"
        selectedSeats = []
        manageConfirmForm()

    }

})();
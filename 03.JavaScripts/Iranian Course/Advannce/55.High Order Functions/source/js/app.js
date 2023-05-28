function addNewBook (callbackFunc) {
    // Codes callbackFunc()
}

// Higher Order Function

function hofExp () {

    return function () {
        console.log('I am inner Function :)');
    }

}

// hofExp()()

let hofInner = hofExp()
hofInner()



let numbers = [1, 2, 3, 4, 5]

numbers.map(function () {})
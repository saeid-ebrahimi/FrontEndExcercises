let number = 12
const pElem = document.querySelector('p')
const inputElem = document.querySelector('input')
const buttonElem = document.querySelector('button')


// try {
//     console.log(x);
// } catch (err) {
//     pElem.innerHTML = err.name
//     console.log(err);
// }

function checkValue () {

    try {
        if (inputElem.value.length > 8) {
            throw 'Too High'
        } else {
            throw 'Too Low'
        }
    } catch (err) {
        pElem.innerHTML = err
    } finally {
        inputElem.value = ''
    }

}

buttonElem.addEventListener('click', checkValue)
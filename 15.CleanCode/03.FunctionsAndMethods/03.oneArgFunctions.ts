function log(message:string): undefined {
    console.log(message)
}

log("Hi There");

function square(number: number) : number {
    return (number * number);
}

const result = square(24)
log(result.toString())

function emailIsValid(email:string) : boolean {
    return (email.length > 0 && email.includes("@") && email.includes(".com"))
}

const isValidEmail = emailIsValid("saeid@hotmail.com")
console.log(isValidEmail)
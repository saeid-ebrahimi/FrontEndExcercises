// they are Commands or calculated values so we use verbs or short phrases with adjectives

// functions performs an operation => describe the operation
function sendData(): object {
    return {};
}
function getUser(): void {
    //...
}
// to provide more details without redundancy 
function getUserByEmail(): void {
    //...
}

// functions computes a Boolean => answer a true/false question
function isPaid():void {
    //...
}

// to provide more details without redundancy
function inputIsValid(nameInput:string): boolean{
    return (nameInput.length > 0)
}

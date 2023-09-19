const add = (a:number , b: number): number => {
    return a + b ;
};

// Typescript inferred the return type and cannot inference the argument types.

const newAdd = (a:number , b: number) => {
    return a + b ;
};

const subtract = (a: number, b:number)=> {
    return a- b;
};

function divide(a:number, b:number):number{
      return a /b ;
}

const multiply = function (a:number, b:number):number{
   return a * b;
}

const logger = (message: string): void => {
    console.log(message)
}

const throwErrror = (message: string): never => {
    throw new Error(message)
}

const maybeError = (message :string): string => {
    if(! message){
        throw new Error(message)
    }
    return message
}

const maybeError2 = (message :string): void => {
    if(!message){
        throw new Error(message);
    }
};

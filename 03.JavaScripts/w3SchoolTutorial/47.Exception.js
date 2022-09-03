
try {
    allert("hell0")
}catch(err){
    document.getElementById("demo").innerText +=err.name + "\n"+ err.messageType + ": " + err.message
}
// The throw statement allows you to create a custom error.
// Technically you can throw an exception (throw an error).

// try catch finally demo with throw
function clickFunction(){
    const message = document.getElementById("p1")
    message.innerHTML = " "
    let inp = document.getElementById("demo1").value
    try{
        if (inp == "") throw "empty"
        if (isNaN(inp)) throw "not a number"
        inp = Number(inp)
        if (inp < 5) throw "too low"
        if (inp > 10) throw "too high"
        message.innerText = inp + " is a valid number"
    }catch( err)
    {
        message.innerHTML ="Error: input is " + err + "\n"
    }
    finally {
        document.getElementById("demo1").value = ""
    }
}
// The Error Object
// Error Object Properties

// name:	Sets or returns an error name
// message:	Sets or returns an error message (a string)

// Error Name Values
// Six different values can be returned by the error name property:
// EvalError:	    An error has occurred in the eval() function
// Note => Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.
// RangeError:	    A number "out of range" has occurred
// ReferenceError:	An illegal reference has occurred
// SyntaxError:	    A syntax error has occurred
// TypeError:	    A type error has occurred
// URIError:	    An error in encodeURI() has occurred

// Range Error
let num = 12
try{
    num.toPrecision(400)
}catch(err)
{
    document.getElementById("p1").innerText += err.name + "\n"
}

// Reference Error
let num2 = 11
try{
    num2 += x
}catch (err){
    document.getElementById("p1").innerText += err.name + "\n"
}

// Type Error
let num3 = 11.87
try{
    num3.toLowerCase()
}catch (err){
    document.getElementById("p1").innerText += err.name + "\n"
}

// URI (Uniform Resource Identifier) Error
try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

//Non-Standard Error Object Properties
//
// Mozilla and Microsoft defines some non-standard error object properties:
//
// fileName (Mozilla)
// lineNumber (Mozilla)
// columnNumber (Mozilla)
// stack (Mozilla)
// description (Microsoft)
// number (Microsoft)
//
// Do not use these properties in public web sites. They will not work in all browsers.
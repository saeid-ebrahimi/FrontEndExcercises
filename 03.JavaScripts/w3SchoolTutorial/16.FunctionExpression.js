// Function Expression can be as anonymous functions
// best practice is to put const before function expression
//Functions must be in scope when they are called, but the function
//declaration can be hoisted (appear below the call in the code)
//function hoisting only works with function
//declarations—not with function expressions.
const factorial = function (term=1){
    if (term < 0)
        return -1
    let fact = 1
    for(let n=1; n < term+1;n++)
    {
        fact *= n
    }
    return fact
}

const rec_fact = function fact(term=1){
    if (term < 0)
        return -1
    else if (term === 1)
        return 1
    else
        //return term * fact(term-1)
        //return term * rec_fact(term-1)
        return term* arguments.callee(term-1)
}
//However, some algorithms cannot be simple iterative loops.
// For example, getting all the nodes of a tree structure
// (such as the DOM) is easier via recursion:

function walkTree(node) {
  if (node == null) //
    return;
  // do something with node
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
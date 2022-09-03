/*
Nested functions and closures
You may nest a function within another function.
 The nested (inner) function is private to its containing (outer) function.

It also forms a closure. A closure is an expression (most commonly,
 a function) that can have free variables together with an environment
  that binds those variables (that "closes" the expression).

Since a nested function is a closure, this means that a nested
 function can "inherit" the arguments and variables of its
  containing function. In other words, the inner function contains
   the scope of the outer function.

To summarize:

The inner function can be accessed only from statements in the outer function.
The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
 */
console.log(addPoly(10,18))
function addPoly(a=0, b=0)
{
    function polynomial(x){
        return 2*x**3 + 3*x*x + 8*x +10
    }
    return polynomial(a)+3*polynomial(b)
}

function poly1(a,b){
    function poly2(c,d){
        function poly3(e){
            return 10*a + 6*b*b + 4*c + 5*d*d + e**4
        }
        return poly3
    }
    return poly2
}
let f1 = poly1(14,10)
let f2 = f1(5,18)
let f3 = f2(9)
console.log(f3)
let f = poly1(14,10)(5,18)(9)
console.log(f)

/*
scope chaining:
Thus, the closures can contain multiple scopes;
 they recursively contain the scope of the functions containing it.
  This is called scope chaining.
 */

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1);
/*
Name conflicts:
When two arguments or variables in the scopes of a closure
 have the same name, there is a name conflict. More nested scopes
  take precedence. So, the inner-most scope takes the highest
   precedence, while the outer-most scope takes the lowest.
    This is the scope chain. The first on the chain is the inner-most
     scope, and the last is the outer-most scope.
*/
function outside() {
  let x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

outside()(10); // returns 20 instead of 10
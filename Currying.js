
//Currying is a process in functional programming in which we can transform a function 
//with multiple arguments into a sequence of nesting functions. 
//It returns a new function that expects the next argument inline.

//BINDING
let multiply = function(a,b){
    console.log(a*b);
}
// creates a copy of the original 
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);
let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

//CLOSURE
//A closure is a function defined inside another function (called parent function)
// and as such it has access to the variables declared and defined within its parent function's scope.
let multiplyMe = function(x){
    return function(y){
        console.log(x*y);
    };
}

let multiplyByTwoMe = multiplyMe(2);
multiplyByTwoMe(5);

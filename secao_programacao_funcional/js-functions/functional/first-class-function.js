/*
* A programming language is said to have
* First-class functions when functions in
* that language are treated like any other
* variable.
*/ 

const add = function(a, b){
  return a + b
}

const subtract = function(a, b){
  return a - b
}

const multiply = (x, y) => x * y

const divide = (x, y) => x / y


console.log(add(4, 6))
console.log(subtract(4, 6))
console.log(multiply(4, 6))
console.log(divide(4, 6))
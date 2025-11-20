//Function Types

/* //1.Normal function
function add(a,b){
    return a+b
}
console.log(add(2,3))


//2.Anonymous function || function Expression

const subtraction = function(a,b){
    return a-b
}
console.log(subtraction(10,6))

//2.a Anonymous function type 2

setTimeout(function(){
    console.log("This runs after 5 seconds");
    
},2000)

//3.Arrow function
const Multiply =(a,b) =>a*b
console.log(Multiply(3,5)) */

//4.IIFE Function
(function (){
    console.log("This Function runs immediately");
})();

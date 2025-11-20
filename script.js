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

/* //4.IIFE Function
(function (){
    console.log("This Function runs immediately");
})();
 */

//1.1 Function loop array if push in normal function

/* var res=[];
function odd(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 !==0)
        {
            res.push(arr[i])
        }
    }
    return res
}
console.log(odd([1,2,3,4,5,6,7,8])) */


//2.1 Function loop array if push in anoynoums function

/* var res=[];
const odd = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 !==0)
        {
            res.push(arr[i])
        }
    }
    return res
}
console.log(odd([1,2,3,4,5,6,7,8])) */

//3.1 IIFE

/* var res=[];
(function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 !==0)
        {
            res.push(arr[i])
        }
    }
    console.log(res);
    
})([1,2,3,4,5,6,7,8]) */

//4.1 Arrow function

/* var res=[];
const odd = (arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] %2 !==0)
        {
            res.push(arr[i])
        }
    }
    return res
}
console.log(odd([1,2,3,4,5,6,7,8]))
 */

// Hoisting
// variable hoisting
/* console.log(a)
var a=10;
 */

// function hoisting

// display()
// function display(){
//     console.log("Hello world")
// }

// Scoping

/* var global= "I am global";
function myfunc(){
    var local="I am local";
    console.log(global)
    console.log(local);
    
}
myfunc()
console.log(global)
console.log(local);
; */

//block scope

/* if(true){
    var block="I am Block Scope"
    console.log(block);
    
}
console.log(block);
 */

// LOOPING
//while

/* let count=5;
while(count<10){
    console.log("Count is:"+count);
    count++;
}
 */

// do while
let count=15;
do{
    console.log("Count is:"+count);
    count++;
}while(count<10);
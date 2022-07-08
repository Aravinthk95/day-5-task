//let number=[0,1,2,3,4,56,6,9,8,7,11,22,33,55,44,88,99,56,4,21,4];

// anonymous function

// var oddnumber= function(number){
//     return (number.filter(n=>n%2));

// }
// console.log(oddnumber(number));

// IIFE function

// (function oddnumber(number) {
//     console.log(number.filter(n=>n%2));

// })
// (number);

//Arrow function

// var oddnumber= number.filter(number => {
//     return number%2;
// });
// console.log(oddnumber);


//let text="hello world";

// anonymous function

// var caps= function (text) {
//     return text.toUpperCase();
// }
// console.log(caps(text));

//IIFE function

// (function (text) {
//     console.log(text.toUpperCase());
// })
// (text);

//arrow function

// var caps = text.toUpperCase (text =>{
//     return (text.toUpperCase());
// });
// console.log(caps);


//anonymous function

// var sum= function(a,b,c,) {
//     return(a+b+c);
// }
// console.log(sum(959,255,2145));

//IIFE function

// (function sum(a,b,c){
//     console.log(a+b+c);
// })
// (2142,5623,587);

//Arrow function

// var sum= (a,b,c)=>{
//     return (a+b+c)
// }
// console.log(sum(45,256,174));


//anonymous function
//let d =[2,3,5,7,11,13,17,19,23,29,31,37,41,43,22,42,26,32,36];
// var prime = function (d) {
//     return (d.filter(n=>n%2));
// }
// console.log(prime(d));

//IIFE function

// (function prime (d) {
//       console.log(d.filter(n=>n%2));
// })
// (d);
  

//Arrow function

// var prime= d.filter(d => {
//     return d%2;
// });
// console.log(prime);

//let h = [ 5,52,54,5,1,2,2,23,35,55,45,5432,8,8,9,'a','d','d','f','f','g','g','h','h','j','j','k'];
 
//anonymous function
 
//  var dup = function (h) {
//      return [...new Set(h)];
//  }
// console.log(dup(h));

//IIFE function

// (function dup (h){
//     console.log([...new Set(h)]);
// })
// (h);

let median = (a,b) => {
    let c =[...a,...b].sort((a,b) => a-b);
    let half = c.length /2 | 0;
    if (c.length % 2) return c[half];
    return(c[half] + c[half - 1]) / 2;
}
let j1 = [1,2,4,5,6,7];
let j2 = [4,8,7,5,6,7];
console.log(median (j1, j2));
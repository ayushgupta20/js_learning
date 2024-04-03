const num = 1000;
const num1 = new Number(1000);
// console.log(typeof num1)

// console.log( num.toString().length)

const bal = 100.9933
// console.log(bal.toFixed(2))

// console.log(bal.toPrecision(4))   //round off
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ******************MATHS*****************
console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.floor(4.9));
// console.log(Math.min(2,3,4,5,6))

console.log(Math.random())   // give random value between 0 to 1

console.log(Math.floor((Math.random()*10 )+1));

const max = 25;
const min = 14;
console.log(Math.floor(Math.random()*(max - min + 1)) + min)   //IMPORTANT

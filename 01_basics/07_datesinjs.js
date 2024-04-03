// DATE
let myDate = new Date();
console.log(myDate)
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //object

let myCreatedDate = new Date(2024,0,23);  // MONTH strted from 0 in js
// let myCreatedDate = new Date("2024-01-23");
// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))

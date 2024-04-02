//Datatype is divided in 2 categories on the basis of that how it is stored in memory and how it's access
// # PRIMITIVE DATATYPES  {values get copied}
/*
    7 typees : String, Number, Boolean, null, Undefined, Symbol, BigInt
*/

const name = "ayush";
const num  =10;
const isLoggedIn=true;
const temp = null;
let UserEmail;

const id = Symbol(1);
const anotherId = Symbol(1);
console.log(id===anotherId)  //false  {adv of symbol}

const bigNumber = 999999999999n;
console.log(typeof bigNumber)

// # NON PRIMITIVES (REFRENCED TYPE) 
/*
    Array, Objects, Functions
*/

const heros = ["shaktiman", "naagraj", "mr.india"]

let myObj = {
    name:"ayush",
    age : 22,
}

const myFun=function(){
    console.log("heal your mind");
}
console.log(typeof heros)  // Object
console.log(typeof myFun) //Function object
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

// ************************************************************************
// two type memory  Stack(primitive) , Heap(NOn-primitive)

let name1 = "ayush";
let anotherName = name1;  //make copy
anotherName = "alpha"

console.log(anotherName);
console.log(name1);

let userOne = {
    email:"alpha@google.com",
    upi: "alpha@ybl"

}
let userTwo = userOne;  //give refrence

userTwo.email="ayush@google.com"
console.log(userOne);
console.log(userTwo)


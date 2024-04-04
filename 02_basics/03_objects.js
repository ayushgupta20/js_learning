// object can be declare in two ways
// 1. constructor  --> create singleton object i.e. only one object of that type
// 2. literal     --> create multiple instance i.e. not a singleton


// Object.create    //constructor method -->singleton object
const sym1 = Symbol("key")
const sym2 = Symbol("key")
// console.log(sym2)
const myobj = {
    "full name":"ayush gupta",
    name : "ayush",
    age:22,
    loc:"orai",
    email:"alpha@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"],
    // HOW TO DECLARE SYMBOL AS KEY IN Obj
    [sym1] : "mykey1",
    [sym2] : "mykey2"
}

console.log(myobj.email)
console.log(myobj["full name"])
console.log(myobj[sym1])
// Object.freeze(myobj)
myobj.email="fds"
console.log(myobj)

myobj.greeting = function(){
    console.log("hello js user")
}
myobj.greeting2 = function(){
    console.log(`hello js user ${this.name}`)
}
console.log(myobj.greeting())
console.log(myobj.greeting)
console.log(myobj.greeting2())
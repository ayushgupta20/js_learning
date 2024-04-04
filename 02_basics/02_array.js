const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros);   //Take array as a data
// console.log(marvelHeros)

const newArr = marvelHeros.concat(dcHeros)  //return new array i.e. not change in original array
console.log(marvelHeros)
console.log(newArr)

const allHeros = [...marvelHeros,...dcHeros];
console.log(typeof allHeros)
console.log(allHeros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(2)
console.log(realAnotherArray)

console.log(Array.isArray("ayush"))  //return true if passing value is array
console.log(Array.from("ayush"))  // convery value to array

console.log(Array.from({age:22}))  // INTERESTING CASE   confuse like make the array of key or value 

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3))
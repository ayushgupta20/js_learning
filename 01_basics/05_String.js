const name = "alpha";
const repocount = 10;
// console.log(name + repocount);  Old type of syntax OUTDATED

console.log(`hello my name is ${name.toUpperCase()} and my repo count ${repocount}`);


const gameName = new String("san&dreas")
console.log(gameName)
console.log(typeof name)  //string
console.log(typeof gameName)  //treated as object 0:G 1:T 2:A key value pair
console.log(gameName[0])
// console.log(name[0]);
console.log(gameName.__proto__);        

console.log(gameName.length)

const newString = gameName.slice(-8,4);
console.log(newString)

const newSringOne = "  ayush "
console.log(newSringOne.trim())  //Remove starting and ending space

const url = "https://alpha.com/ayush20"
console.log(url.replaceAll('a','b'))

console.log(url.includes('alpha'))

let name1 = "Alpha-1902-alpha";
console.log(name1.split('-',3));

console.log(name1.small())
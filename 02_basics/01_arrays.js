// ARRAYS
// js arrays are resizeable and contain diff datatypes
const myArr = [0,1,2,13,4]
// console.log(myArr["8"])
console.log(myArr[0])
// copy operation in array makes its shallow copy means point same reference change will reflect in original array
const myheroes=["shaktiman" , "naagraj"]
const myarr2 = new Array(12,4,5);
console.log(myarr2["1"])


// Array methods

// myarr2.push(10)
// myarr2.pop(2);

// myarr2.unshift(5)        // add element at 0th index by shifting all the values
// myarr2.shift()          // delete the 0th index value by shifiting
// console.log(myarr2);

// console.log(myarr2.includes(45))  //true/false
// console.log(myarr2.indexOf(37))   //give integer value

const newArr = myArr.join()   //Bind array to string
// console.log(myArr)
// console.log(newArr)

// SLICE AND SPLICE
// slice used to print a part of array without change original one
console.log("A",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1)
// Splice print the part of array include range and remove from original array and 
// if we pass three argument in splice then it add that number at place where it remove the number
const myn2 = myArr.splice(1,3,5)   // remove the index 1,2,3 and add value 5
console.log(myn2)
console.log(myArr)
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((item)=> item+10)   //map also use callback function
// const newNums =[]
//  myNumbers.forEach((items)=> {newNums.push(items+10)})  // for each not return the value
// console.log(newNums);


//CHAINING :- it is basically use more than one function sequentially given below 
const newNums = myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>50)
console.log(newNums);

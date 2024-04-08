const coding = ["js", "ruby", "java", "python"]

// coding.forEach(  function (item) {  // for each is HIGH ORDER function
//     console.log(item)
// })   //callback function not have name

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)   //only pass the refrence of call back function i.e. not execute here

// coding.forEach((item,i,arr)=>{
//     console.log(item,i,arr)
// })


const detail = [
        {
            name:"ayush",
            age:33,
            gmail:"@.com"
        },
        {
            name:"ayush",
            age:33,
            gmail:"@.com"
        },
        {
            name:"ayush",
            age:33,
            gmail:"@.com"
        }
    ]

detail.forEach((item=>{
    console.log(item.age)
}))
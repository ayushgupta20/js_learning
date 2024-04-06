// let  a = 10
// const b = 20
// var c = 30
let a =150
if(true){
    let  a = 10
    const b = 20
    var c = 30
    // console.log(a);
}
// console.log(a)
// console.log(b)
// console.log(c)

// console.log(a)
// for (let i = 0; i < array.length; i++) {
//     const element = array[i]; 
// }

function one(){
    const userName = "ayush"
     function two(){
        const website = "youtube"
        console.log(userName);
     }
    //  console.log(website)
     two()
}
// two()
one()

// **************************************Interesting********************************
console.log(addOne(3))  // not give error
function addOne(num){
    return num+1
}
console.log(addTwo(3));  // give error bcz declaration type is different
const addTwo = function(num){
    return num+2
}

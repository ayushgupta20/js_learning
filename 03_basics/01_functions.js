function add(a,b){
    return a+b
}
const res = add(4,5)
// console.log("result:",res)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("ayush"))
// console.log(loginUserMessage())


function calculateCartPrice(val1,...num1){   //...num1 is a rest operator used to return all the args in a bundle
    return num1
}

// console.log(calculateCartPrice(122,3433,643))

// USE OBJECT IN A FUNCTION
const user={
    userName : "ayush",
    age : 22
}

function handleObjects(anyObject){
    console.log(`usename is ${anyObject.userName} and age is ${anyObject.age}`)
}
handleObjects(user)
handleObjects({
    userName:"alpha",
    age:33
})

const myNewArray = [1,2,3,4]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
const tinderuser = new Object()   // singleton object
// const tinderuser = {}    // not a singleton object
tinderuser.id="123aabc"  // add id in object
tinderuser.name="alpha"  // add name in object
tinderuser.isLoggedIn=false;
// console.log(tinderuser)

// How to declare object inside object
const regularUser = {
    email: "some@gmaiil.com",
    fullname : {        //object inside object
        userFullName: {     //object inside object inside object
                firstName:"ayush",
                lastName:"gupta"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname.userFullName.firstName)
//SUPPOSE if fullname not exist then error occur,
// we use optional chaining Discuss further
// console.log(regularUser.fullname)


//MERGING OR COMBINE THE OBJECT
const o1 = {
    1:"a",
    2:"b"
}
const o2 = {3:"c", 4:"d"}  
const o3 = {5:"c", 6:"d"}  

// const o3 = {o1,o2}  //problem-> It create object inside object not combine it
const o6 = Object.assign({},o2,o1,o3)  // passing parantheses is optional but prefer it bcz that gurantees that the result will combine the object in single curly braces
                                        // Here first argument is target and other are source

// console.log(o6)
// console.log(o1)
// console.log(o2)

// here we use spread operaor for combine the object
const newObj ={...o1,...o2,...o3}
// console.log(newObj)

// how database return the data and how we access --> DATABASE return the array of objects given below
const users = [
    {
        id:1,
        email:"alpha"
    },
    {
        id:1,
        email:"alpha"
    },
    {
        id:1,
        email:"alpha"
    },
    {
        id:1,
        email:"alpha"
    }
]

//access ?
// users[1].email

console.log(tinderuser)


console.log( Object.keys(tinderuser))  // return datatype is array
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isLoggedIn'))  // check whether object have this property

// DESTRUCTURING IN ONJECTS line79-88

const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hithesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course  //IN this step we extract the value from object i.e we directly access that value
// console.log(courseInstructor)
console.log(instructor);

// API return the value from backend in the form of json file (older in xml file) (json --> javaScript object notation)
// all the keys and value are  in String format
// OBJECT FORMAT
// {
//     "name" = "ayush"
//     "course" = "js in hindi"
//     "price" = "free"
// }
// OR IN ARRAY FORMAT (object inside array)
// [
//     {},
//     {},
//     {}
// ]
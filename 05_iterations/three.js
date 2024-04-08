//for of loop

// const detail = [
//     {
//         name:"ayush",
//         age:33,
//         gmail:"@.com"
//     },
//     {
//         name:"ayush",
//         age:33,
//         gmail:"@.com"
//     },
//     {
//         name:"ayush",
//         age:33,
//         gmail:"@.com"
//     }
// ]

// for (const obj of detail) {
//     console.log(obj.age)
// }

const map = new Map()
map.set("in","india")
map.set("USa","United State of Amarica")
map.set("fr","france")
// console.log(map)

// for (const [key ,value] of map) {
//     // console.log(key,':-',value)
// }

const myObj={
    "game1":"GTA",
    "game2":"s&D"
}

for (const [key,value] of myObj) {  //object are not iterable
    console.log(key,':-',value)
}
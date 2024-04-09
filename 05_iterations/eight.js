//Reduce in js
// reduce have two parameters 1.accumulator 2.item(value in array it can be obj and other)
const myNumbers = [1,2,3]
// const myTotal = myNumbers.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currval ${currVal}`)
//     return acc+currVal
// },2)

const myTotal = myNumbers.reduce((acc,curr) => (acc+curr),0)
console.log(myTotal)

const shoppingCart=[
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python",
        price : 999
    },
    {
        itemName : "android",
        price : 1999
    },
    {
        itemName : "dataScientist",
        price : 12999
    }
    
]

const cartTotal = shoppingCart.reduce((acc,item)=>(item.price+acc),0)
console.log(cartTotal)
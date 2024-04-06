// falsy values
    // false,0,-0,"",BigInt 0n,null,undefined,NaN


// truthy value
    // "0","false"," ",[],{},function(){}
    
const emptyObj ={}

if(Object.keys(emptyObj).length===0){
    console.log(`object is empty`);
}

// ***********************************************************
// Nullish Coalescing Operator (??): null undefined
    // To avoid null
let  val1 ;
// val1 = 5 ?? 10
// val1 = null??10
val1 = undefined ?? 54
console.log(val1)


// Immediately Invoked Function Expressions (IIFE)
// for Interview IIFE is used to avoid the global scope pollution(for avoiding global scope variable declaration)
(function chai(){
    // Name IIFE
    console.log(`DB CONNECTED`);
})();  //semicolor is compulsory for terminate IIFE


//()() //in first paranthesis we write the function definition and second paranthesis is for the function execution
// IIFE with arraow function
(
    // Simple IIFE
    (name)=>{
        console.log(`DB connected 2,${name}`)
    }
)("alpha")
const user = {
    username:"jack",
    price:"999",

    welcomeMessage : function(){
        console.log(`welcome ${this.username}`);
        console.log(this);  //gives the current context
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this)  //here current context is empty  becuse this is node enviroment 
                    // if we run this in browser console the it give window (window is a global object)

function chai(){
    let user = "ayush"
    console.log(this.user)   //return undefined bcz inside function this is not used
}
// chai();

// **Arrow Function  {release in ES6}

const chai2 =() =>{
    let name ="ayush"
    console.log(this.name)
}

// chai2()

const addTwo=(num1,num2)=>{
    return num1+num2
}

// console.log(addTwo(2,3))
const addThree =(num1,num2,num3)=> (num1+num2+num3)   //this is called implicit return (only one line code)
console.log(addThree(2,3,4))
const retObj =()=>(   //when use paranthesis no need to write return 
    {
        name:"a",
        age:432
    }
)

console.log(retObj())

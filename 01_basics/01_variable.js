const accountId = 1234;
let accountEmail= "ayush@gmail.com";
var accountpass = "23445";
accountCity = "jaipur";
let accountState;
// accountId=1;  not allowed

accountEmail = "abc!gmail.com";
accountpass = "2121210";
accountCity="banglore";


// console.log(accountId);
// console.log(accountEmail);
// console.log(accountpass);
// console.log(accountCity);

console.table([accountEmail,accountId,accountpass,accountCity]);
console.log(accountState);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
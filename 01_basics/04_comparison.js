// console.log("2">1);

console.log(null>0);  //false
console.log(null==0);  //false
console.log(null>=0);  /*true beacause {
                                        reason is that the equality check == and comparison check >,<,>=,<= work differently
                                        Comparisons convert null to a number, treation it as 0
}*/
// Always compare same dataTypes  CLEAN CODE

//STRICT CHECK ===
console.log("2"==2);  //true
console.log("2"===2);  //false
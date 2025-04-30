// Functions
// var - Access in global level not in function level
// let - Access in global level and in block level{}
// const - cannot be reintialize and value will remian same throughout the program

let greet = "Pritam"

if (1==1)
{
   let greet = "Nishant"
}
// Normal function syntax in js
function add(a,b)
{
 return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(greet)

// Anonymous fucntions - functions which do not have name and can be assigned to variables
//Type 1 -
let sum1 = function (c,d)
{
  return c+d
}

console.log(sum1(4,4))

//Type 2 -
let sum2 = (c,d)=>c+d

<<<<<<< HEAD
<<<<<<< HEAD
console.log(sum2(2,3)) 
=======
console.log(sum2(2,3)) 
>>>>>>> 4652a247fd19c720484ecf9b3395e3fdb585c6f2
=======
console.log(sum2(2,3)) 
>>>>>>> master

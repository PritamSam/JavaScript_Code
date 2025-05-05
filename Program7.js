//Strings

let day = 'tues day'
// print length of string
console.log(day.length)
// create substring
let newString = day.slice(2,5)
console.log(newString)
// to print the character at index()
console.log(newString[1])
// to split string at cerating breakpoints
let splitDay=day.split("s")
console.log(splitDay[1].length)
// trim method is used to remove spaces between characters
console.log(splitDay[1].trim().length)

//convert string to number
let a ='24'
let b ='44'
let diff = parseInt(a)+parseInt(b)
console.log(diff)
console.log(typeof(diff))
// convert number to string
diff.toString()
let x =diff + '44'
console.log(x)
console.log(typeof(x))

// to find the index based on keyword
let newDay = "Today is good day"
//let z=newDay.indexOf('day')
let z = newDay.indexOf('day',5)
console.log(z)

// program to find occurneces of "day" keyword in above string
let count =0;
let z1=newDay.indexOf('day')
while (z1!=-1)
{
    count++
    z1=newDay.indexOf('day',z1+1)
}

console.log(count)


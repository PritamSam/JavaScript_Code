//Arrays
//Array Declaration
let x= Array(6)

var x1= new Array(10,20,30,40)
var x2= [10,20,30,40]
console.log(x2[2])//30
//update element in array
x2[3]=30
console.log(x2)
// to print length
console.log(x2.length)
//to add new elelement at end of array
x2.push(50)
console.log(x2)// [10,20,30,40,50]
// delete element at end of array
x2.pop() 
console.log(x2)
// add element at begining of array
x2.unshift(0)
console.log(x2)
// to remove element at begining of array
x2.shift()
console.log(x2)
//to check of index of element
console.log(x2.indexOf(10))
// to check element is present in array
console.log(x2.includes(100))
// to break array into sub array
console.log(x2.slice(2,4))
// reduce: This method is used when we need to iterate each values and store it
// It contains anonymous method to perform the same function
/*
var sum1=0
for(let i=0;i<x2.length;i++)
{
 sum1 = sum1 + x2[i]
}
 console.log("sum1")
*/
console.log(x2.reduce((sum1,result)=>sum1+result,0))

var score = [11,12,13,14]
var op =[]
for(let i=0;i<score.length;i++)
    {
        if(score[i]%2==0)
        {
            op.push(score[i])
        }

    }
console.log(op)
//filter : It is used when we need to perform some operations on conditions
let newScore = score.filter(score=>score%2==0)
console.log(newScore)
//map : To perform some operations after filter
let mappedArray=newScore.map(score=>score*3)
console.log(mappedArray)
// Combination of filter,map,reduce
let sumValue = score.filter(score=>score%2).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue)
// To sort Array
let fruits = ["banana","apple","mango"]
//sorting in ascending order
fruits.sort()
console.log(fruits)
//sorting in descending order
fruits.reverse()
console.log(fruits)

// Program to find minimum distance between elelments

let var1 = [12,4,3,19]
/*console.log(var1.sort())
var1.sort(function(a,b){
    return a-b
}) */

// Above progam written in recursive function

console.log(var1.sort((a,b)=>a-b))

// Loops 
// While loop is executed untill the condition becomes false
// While Loop
// To come out of executing loop in terminal, press ctrl+c
let a =0
console.log("Output of While Loop =")
while(a<10)
{
 console.log(a)
 a=a+1
}

// Do while - the loop is executed at least once before checking the condition
// when we want to execute code at least once , then we use do while loop
console.log("Output of do while Loop =")
do
{
    a++//same as a=a+1
}while(a<1)
{
    console.log(a)
}
    
//for loop = when we know we have definite number of iterations to execute
console.log("Output of For Loop =")
for (let i=0;i<=10;i++)
{
    if(i%2==0)
        console.log(i)
}

console.log("Program to print first 3 numbers divisble of 5 and 2")
let n=3
for(let i=0;i<100;i++)
{
    if(i%2==0 && i%5==0)
    {
        i++
        console.log(i)
        if(n == 3)
            break
    }
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 4652a247fd19c720484ecf9b3395e3fdb585c6f2
=======
}
>>>>>>> master

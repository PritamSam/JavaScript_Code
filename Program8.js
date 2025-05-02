// Objects  - they are the collection of properties and can be defined in key value pairs

let person = {
    firstname : "Pritam",
    lastname : "Samanta",
    age : 24,
    // to call property of object in anonymous function, use "this" keyword
    fullname : function()
    {
       console.log(this.firstname+this.lastname)
    }
}
console.log(person.fullname())
console.log(person.firstname)
console.log(person.lastname)
//Printing object values in form of arrays
console.log(person['firstname'])
// Changing values during run time
person.firstname = "Nishant"
console.log(person.firstname)
// Adding a new property to the object Person
person.gender = "MALE"
console.log(person)
// deleting new property from Person
delete person.gender
console.log(person)
// to verify wether this gender property exists person object
console.log('gender' in  person)
// To print all the values of object through iteration method
for (let key in person)
{
    console.log(person[key])
}


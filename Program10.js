// Inheritence can be done using extend keyword to acquire properties of parent class
//importing class
const Person = require('./Program9')
class Pet extends Person
{
    get location()
    {
        return "Canada"
    }
 constructor (firstname,lastname)
 {
    //Calls Parent class constructor
    super(firstname,lastname)
 }
}

let pet = new Pet("ABC","XYZ")
pet.fullName()
console.log(pet.location)
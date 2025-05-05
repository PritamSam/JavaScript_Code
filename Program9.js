// Classes and its properties,Methods
// Note : From ES6,  we can represent any object in form of class
// In order to make the class exportable we place module.exports=Class Object name
class Person
{
  // Class Properties
  age=25
  // Note :  we can define property using getter and setter method
  get location()
  {
    return "India"
  }
  // constructor is method which executes by default after creating an object
  // Note : All Instance Variable are defined inside constructor
  constructor(firstName,lastName)
  {
    this.firstName=firstName
    this.lastName=lastName
  }
  //Methods
  fullName()
  {
   console.log(this.firstName+this.lastName)
  }
}
// If we want to access any property of the class, then we need to create object of that class
//let person=new Person
let person =new Person('Pritam','Samanta')
let person1 =new Person('Nishant','Samanta')
console.log(person.age)
console.log(person.location)
person.fullName()
person1.fullName()

module.exports = Person
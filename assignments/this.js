/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window-  If you just console.log(this) it will refer to the window object.
Its the global scope.

* 2. Implicit- when a function is invoked it will look to the left of the . to find out
what this is.  ex. whatever.funct() this would refer to whatever since its to the left
of funct();

* 3. New keyword binding-  when an object is created using a function constructor
the this word will refer to the item in the ().  Ex. new Person('Todd').  Person would be the function
constructor and the this keyword would refer to 'Todd'.

* 4.Explicit binding- This happens when we use .call, .apply, and .bind.  .bind is stored in a variable
and invoked later.  This will refer to the argument that is passed into it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);  //simplest one.  It will refer to the window.

// Principle 2

// code example for Implicit Binding
const human = {
  name: "Llyod",
  age: 60,
  speak: function() {
    return `I am a human and my name is ${this.name} and I am ${this.age}`
  }
}

console.log(human.speak()) //implicit binding(this refers to human)
// Principle 3

// code example for New Binding
const Person =function(name, age) {
  this.name = name,
  this.age = age,
  this.speak = function() {
    return `My name is ${this.name} and I am ${this.age}`
  }
}

const todd = new Person('Todd', 39);
console.log(todd.speak());
// Principle 4

// code example for Explicit Binding
//using Person function constructor

const Child = function(name, age) {
  this.name = name,
  this.age = age
};

const amelia = new Child('Amelia', 4);

function sayHello() {
  return `Hello, my name is ${this.name} and I am ${this.age}`
};

//sayHello.call(amelia)  this is an example of explicit binding.

console.log(sayHello.call(amelia));

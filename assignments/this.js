/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - "this" ties to the window, or browser, when it is called in a function without being referenced by another object.
* 2. Implicit Binding - When you call a method then whatever is to the left of the . is what "this" is tied to.
* 3. Explicit Binding - "this" is tied to what you tell it to be tied to.
* 4. New Binding - Constructor Function - "this" refers to a specific object in and returned by a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

function hello(greet) {
    console.log(this);
    return name;
  }
  hello("Greetings");

// Principle 2

const impBind = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
    }
  };
  impBind.sayHello('Jake');

// Principle 3

function BeNice(niceGuy) {
    this.greeting = 'Hello ';
    this.niceGuy = niceGuy;
    this.speak = function() {
      console.log(this.greeting + this.niceGuy);
    };
  }
  
  const jimothy = new BeNice('Norman');
  const norman = new BeNice('Jimothy');
  
  jimothy.speak();
  norman.speak();

// Principle 4

jimothy.speak.call(norman);
norman.speak.apply(jimothy);
![](http://washingtontechnology.org/wp-content/uploads/2014/11/General_Assembly_logo.png)

# Prototypes and Inheritance in JavaScript

### Objectives
*After this lesson, students will be able to:*

- Demonstrate a use case that explains prototypal inheritance and what kind of flexibility it gives to programmers
- Define a custom constructor function that sets one or more properties of a new object
- Add functions to a prototype

### Preparation
*Before this lesson, students should already be able to:*

- Define a new Ruby class with an `initialize` method as well as other instance and class methods
- Understand variables, objects, and functions in Javascript
- Test Javascript in the web console

## An Intro to Constructors (5 min)

If we think back to our Ruby unit, we learned how to organize our code using classes. What was the benefit of organizing our code this way?

- Don't have to repeat code
- Ability to define objects based on type
- Know where all parts of the application live

So we'll want to organize our Javascript code in a similar way – and we'll do this with prototypes and constructors. Instead of explaining the constructor right off the bat, let's take a look at the object literal in the JS console and see if we can deduce what the constructor does:

```
> var object = {key: "value"};
    < undefined
> object.constructor
    < Object() { [native code] }
```

By looking at the `(){}` syntax, we can deduce that the constructor is a function. It is similar to the `initialize` method in Ruby, and a prototype is similar to a class.

## First Prototype – Codealong (25 min)

So let's write our first prototype! I've seen so many dogs in Austin lately – let's write a `Dog` prototype! The syntax for a constructor function is the same as that for any Javascript function:

```
function Dog(){
}
```

Just like in Ruby, we'll want to pass certain traits into our function and set them as properties on the object. Let's give our dog a `name` property:

```
function Dog(name){
  this.name = name;
}
```

`this` is the Javascript equivalent of the `self` keyword in Ruby. In order to solidify this syntax, let's give our dog two more properties. For example:

```
function Dog(name, color, breed){
  this.name = name;
  this.color = color;
  this.breed = breed;
}
```

Now, how do we create new instances of the Dog object?

```
var fido = new Dog("Fido", "brown", "German Shepherd");
var spot = new Dog("Spot", "white/black", "Dalmatian");
```

#### Adding Functions to a Prototype

Writing the constructor function is great, but we'll also want to add functions to our prototypes. The syntax for that is:

```
Dog.prototype.functionName = function(){
  // code here
};
```

Let's add a method `barkName()` to a `Dog` that allows the dog to bark it's name to the console:

```
Dog.prototype.barkName = function(){
  var bark = "Woof! My name is " + this.name;
  console.log(bark);
  return bark;
}
```

Now, if we call `fido.barkName()`:

```
> fido.barkName();
    Woof! My name is Fido
    < "Woof! My name is Fido"
```

We can add one more function to our dog to demonstrate writing:

```
Dog.prototype.rename = function(newName){
  this.name = newName;
  return this;
}
```

```
> fido.rename("Buddy");
    < Dog {name: "Buddy", color: "brown", breed: "German Shepherd"}
```

## Code Exercise (10 min)

## Second Prototype - Codealong (15 min)

## Code Exercise (10 min)

## Conclusion (5 min)
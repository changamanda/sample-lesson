function Dog(name, color, breed){
  this.name = name;
  this.color = color;
  this.breed = breed;
}

Dog.prototype.barkName = function(){
  var bark = "Woof! My name is " + this.name;
  console.log(bark);
  return bark;
};

Dog.prototype.rename = function(newName){
  this.name = newName;
  return this;
};

function Owner(name, dog){
  this.name = name;
  this.dog = dog;
}

Owner.prototype.renameDog = function(newName){
  this.dog.rename(newName);
  return this.dog;
};

function Student(name, hometown){
  this.name = name;
  this.hometown = hometown;
  this.placesLived = [hometown];
  this.cohort = null;
}

Student.prototype.move = function(newHometown){
  this.hometown = newHometown;
  this.placesLived.push(newHometown);
  return this;
};

function Cohort(name){
  this.name = name;
  this.students = [];
}

Cohort.prototype.addStudent = function(newStudent){
  this.students.push(newStudent);
  newStudent.cohort = this;
  return this;
};

$(document).ready(function(){
  var fido = new Dog("Fido", "brown", "German Shepherd");
  var sean = new Owner("Sean", fido);
  var amanda = new Student("Amanda", "Austin");
  var wdi4 = new Cohort("WDI4");
  debugger
});
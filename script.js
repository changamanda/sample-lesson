function Dog(name, color, breed){
  this.name = name;
  this.color = color;
  this.breed = breed;
}

Dog.prototype.barkName = function(){
  var bark = "Woof! My name is " + this.name;
  console.log(bark);
  return bark;
}

Dog.prototype.rename = function(newName){
  this.name = newName;
  return this;
}

$(document).ready(function(){
  var fido = new Dog("Fido", "brown", "German Shepherd");
  debugger
});
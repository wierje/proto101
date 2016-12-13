var dog = {};

dog.bark = function() {
    console.log("woof");
};

dog.bark();

var sparky = {};

sparky.name = "Sparky";

sparky.bark = function() {
    console.log(this.name + ' said, "woof"');
};

sparky.bark();


var me = {

    name: "James",
    age: "60",
    nameAge: function() {
        console.log("My name is " + this.name + " and my age is " + this.age + ".");
    }
};

me.nameAge();

function Bear () {
  this.claws = true;
  }

var smokey = new Bear();
console.log("Smokey ",smokey);

function Bear (name, location) {
  this.name = name;
  this.location = location;
}

Bear.prototype.claws = true;
Bear.prototype.likes =["Honey", "Slow runners"];
Bear.prototype.growl = function () {
  console.log("rawr");
};

var winnie = new Bear("Winnie", "100 acre wood");
console.log("Winnie", winnie);

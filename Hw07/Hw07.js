//Exercise: Animals classes (1/4)
/*
Define an abstract class named Animal including the following:
+An abstract method makeSound(), which does not have a body.
+A protected property name of type String.
+?A private property age of type int.
+A public method getName() that returns the name of the animal.
+A public method getAge() that returns the age of the animal.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Exercise: Animals classes (2/4)
/*
+Create two subclasses of Animal: Dog and Cat.
+In the Dog class:
+    Set the name and age properties through a constructor.
+    Implement the makeSound() method to return "Woof!".
In the Cat class:
+    Set the name and age properties through a constructor.
+    Implement the makeSound() method to return "Meow!".
*/
//Exercise: Animals classes (3/4)
/*
+Ensure that the name property in the Animal class is protected so that it can be accessed by subclasses but not from outside the class hierarchy.
+The age property should be private, meaning it cannot be accessed directly outside the Animal class.
+The getName() method should be public so that it can be accessed from outside the class.
+The getAge() method should be public so that it can be accessed by subclasses but not from outside the class hierarchy.
*/
//Exercise: Animals classes (4/4)
/*
In a separate class (e.g., AnimalTest), create instances of Dog and Cat.
Use the getName() method to print the name of each animal.
Call the makeSound() method for each animal and print the sound they make.
Attempt to access the age property directly (this should fail, use try and catch to print an error message) and instead, use the getAge() method to print the age of each animal.
*/
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.getName = function () {
        "".concat(this.name);
    };
    Animal.prototype.getAge = function () {
        "".concat(this.age);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Woof!";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        return _super.call(this, name, age) || this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow!";
    };
    return Cat;
}(Animal));
var AnimalTest = /** @class */ (function (_super) {
    __extends(AnimalTest, _super);
    function AnimalTest(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.myDog = new Dog("JuanCarlos", 2);
        _this.myCat = new Cat("Mitzi", 5);
        return _this;
    }
    AnimalTest.prototype.makeSound = function () {
    };
    AnimalTest.prototype.printName = function () {
        this.myDog.getName();
        this.myCat.getName();
    };
    AnimalTest.prototype.betterCallSound = function () {
        this.myDog.makeSound();
        this.myCat.makeSound();
    };
    return AnimalTest;
}(Animal));

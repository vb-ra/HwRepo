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
Create two subclasses of Animal: Dog and Cat.
In the Dog class:
    Set the name and age properties through a constructor.
    Implement the makeSound() method to return "Woof!".
In the Cat class:
    Set the name and age properties through a constructor.
    Implement the makeSound() method to return "Meow!".
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

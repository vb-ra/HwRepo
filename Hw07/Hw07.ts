//Exercise: Animals classes (1/4)
/*
Define an abstract class named Animal including the following:
+An abstract method makeSound(), which does not have a body.
+A protected property name of type String.
+?A private property age of type int.
+A public method getName() that returns the name of the animal.
+A public method getAge() that returns the age of the animal.
*/

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


abstract class Animal {
    protected name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    abstract makeSound(): void;

    public getName(): void{
        `${this.name}`;
    }

    public getAge(): void{
        `${this.age}`;
    }
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): string {
        return `Woof!`
    }
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): string {
        return `Meow!`
    }
}

class AnimalTest extends Animal {
    
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): void {   
    }

    myDog = new Dog("JuanCarlos", 2);
    myCat = new Cat("Mitzi", 5);

    printName(){
        this.myDog.getName();
        this.myCat.getName();
    }

    betterCallSound(){
        this.myDog.makeSound();
        this.myCat.makeSound();
    }
}


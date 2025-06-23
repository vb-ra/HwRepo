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
Create two subclasses of Animal: Dog and Cat.
In the Dog class:
    Set the name and age properties through a constructor.
    Implement the makeSound() method to return "Woof!".
In the Cat class:
    Set the name and age properties through a constructor.
    Implement the makeSound() method to return "Meow!".
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

abstract class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): string {
        return `Woof!`
    }
}

abstract class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    makeSound(): string {
        return `Meow!`
    }
}
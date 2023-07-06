// Classes as in other languages are usefull because allows us to define objects
// and models that we are going to use all over our project.

// The simple definition of a class is like this
class exampleClass{
    // Attributes
    //functions | Methods
}

// To define a method into a class you just need to do this
class Cart{
    
    printColor():void{
        console.log("red");
    }
}

// Now whenever we declare a new object (with the new keyword), the method printColor will be there
const cart = new Cart();
cart.printColor();

// But classes also have attributes, declare them needs a constructor
class ExampleClass {
    color:string;

    constructor(color:string){
        this.color = color;
    }

    // Now we can use this attribute into our functions

    printColor():void{
        console.log(this.color);    // this keyword references the attribute of this class
    }
}

// In this case, we can access both, the attribute and the method
const example = new ExampleClass("blue");
console.log(example.color);

// Now is important to talk about the modifiers public|private|protected
// It works the same as in others languages

class Cart1{
    private color:string;

    constructor(color:string){
        this.color = color;
    }

    public printColor():void{
        console.log(this.color);
    }
}

// Now a new object of type Cart1, don't allow us to access directly the attribute color, but we can interact
// with it with the methods in the class

const cart1 = new Cart1("red");
cart1.printColor();

// Another important thing is inheritance, classes can inherit both, methods and attributes from a parent class
// To do it is like this

class Vehicle extends Cart1{

}

// Default, this class will load the parent constructor by default
const vehicle = new Vehicle("red");

class Vehicle1 extends Cart1{
    model:string;

    // Manually call of the parent constructor uses the keyword super
    constructor(model:string, color:string){
        super(color);
        this.model = model;
    }
}
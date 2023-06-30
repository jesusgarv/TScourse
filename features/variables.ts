// Type annotations
let apples : number = 5; // We tell the TS compiler the type of the variable

// TS Compiler allows us to change the value but only if the type is the same as in the definition
apples = 10; 

let lastname : string = "Garcia";
let hasName : boolean = true;

let nothingMuch = null; // TS can assign the type of the variable on its own type inference
let nothing : undefined = undefined;

// It's also possible to type annotation with objects and own interfaces
let now : Date = new Date();

// In the case of arrays we can do the following
// This annotation helps us to create arrays of one single type of data
let colors : string[] = ['red', 'blue', 'yellow'];
let numbers : number[] = [1,2,3,4,5,6,7];

// Classes
class Car{
    getName : Function = () => "Car";
}

// To create a new instance of a class we just call it with the new keyword
const mazda = new Car();

// This instance will have the properties of the class
console.log(mazda.getName());

// Object literal
// to declare the object we need to put inside the {} the definition of the properties
let point : { x: number, y: number } = {
    x: 10,
    y: 20
}

// Functions
// We need to put the params onto the parentesis and after an arrow, the return type of the function
const logNumber : (i: number) => void = (i)=>{
    console.log(i);
}

/** 
 * In fact we want to use manual type annotations when we declare a variable and will use it later
 * or when we want a variable to have a type that can not be inferred or in case of functions,
 * when the function returns an any value and we need to clarify this.
 * 
 * Other case we can use the type inference
*/

// Variables whose type cannot be inferred correctly
// Quick example
let numbers2 = [-10, -1, -2, 30, -4];
let numberAboveZero : boolean | number = false; // In this case, the variable can be a boolean or a number

numbers2.forEach((val)=>{
    val > 0 ? numberAboveZero = val : null ; // If the number in the array is > 0, it is saved on the variable
});

// Cases like this needs a to be specified, inference would show an error because of the first boolean
// declaration of the variable.
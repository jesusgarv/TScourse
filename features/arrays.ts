// Initialize a simple array
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// When we initialize our array with no values on it, we initialize it avoiding to use the any type
const exampleArray: string[] = [];

// We define a 2D array with this annotation
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Some examples of inference of variables using arrays are like these
// both examples are infered as string because carMakers is a string array
const car = carMakers[0];
const myCar = carMakers.pop();

// Is also useful when we map our array
// This element shows the multiple methods of a string
carMakers.map((car:string):string =>{
    return car;
});

// But we can also define arrays with multiple types, also called flexible types
// In this case the annotation is infered by the compiler as a Date|string
const importantDates = [new Date(), '2023/11/03'];

// This is a manual input of this annotation, important if we initialize an empty array
const moreimportantDates: (string|Date)[] =[new Date(), '2023/11/03'];

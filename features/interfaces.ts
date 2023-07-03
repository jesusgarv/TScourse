// The common way to pass objects through functions is like this
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void=>{
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);
}

printVehicle(oldCivic);

// But this is not appropiate when we have to add more properties to our object
// because we would need to update each functions that uses these objects
// This is why we create interfaces, it's a simplier way to manage our records properties
// and the type of a function param
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const newPrintVehicle = (vehicle: Vehicle): void=>{
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);
}

// Also, as our oldCivic object contains the same params as a Vehicle
// interface, so the TS compiler won't mark it as an error
// But if we don't fit the same tags or types, TS would mark an error
newPrintVehicle(oldCivic);

// And the object can have more properties than the interface has,
// this won't mark an error

// Another important thing about interfaces is that you can reutilize some properties
// or functions, an example is

// Also this is how we declare functions inside interfaces
interface Reportable {
    summary() : string;
}

// Object similar to the Vehicle interface
const newCivic = {
    name: 'civic',
    year: new Date(),
    broken: false,
    summary():string{
        return `Car Name: ${this.name}
        Year: ${this.year}
        is Broken?: ${this.broken}`;
    }
}

// Object Drink of another interface that we don't declare here
const drinkExample = {
    color: 'green',
    carbonated: true,
    sugar: 40,
    summary():string{
        return `This drink is ${this.color}`;
    }
}

// Both objects can use the following function
const printSummary = (item: Reportable):void =>{
    console.log(item.summary());
}

// This is how our function works for both, vehicles and drinks
printSummary(drinkExample);
printSummary(newCivic);

// The important thing here, is that our objects satisfy the interfaces to work with our functions
// but is not so important to fit exactly the object to an interface
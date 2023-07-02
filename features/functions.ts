// Examples of functions and type annotation

// this is another way to declare a function, here
// TS inferees that add is a function with two params
// and a number as return type
const add = (a: number , b: number) : number => a+b;

const substract = (a:number,b:number) : number => a-b;

// Is possible to assign type annotations to named functions
function divide(a:number, b:number) : number{
    return a/b;
}

// Or even to variables that call annonymous functions
const multiply = function(a:number, b:number) : number{
    return a*b;
}

const logger = (message: string): void => {
    console.log(message);

    // This function also can return null or undefined
}

// never says that we never reach the end of a function, but its not common to use this
// We can also use void in a function like this
const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

// The last example is when we give an object as an argument
// this is an example
const logWeather = (forecast: {date : Date, weather: string}): void =>{
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(forecast);

// but we can also destructure our object as we can see right here
const logWeather2 = ({date, weather} : {date: Date, weather : string}) : void => {
    console.log(date);
    console.log(weather);
}
// Here we have an example object with some properties and a method
const profile = {
    name : 'alex',
    age: 20,
    coords : {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age;
    }
}

// We can destructure our object just like this, declaring the profile in front of the destructure
const { age } : {age:number} = profile;

// it is also possible to extract properties of an object inside another, we just need to do
// something like this
const { coords : {lat, lng} }: { coords : {lat : number, lng: number} } = profile;
console.log(age);
console.log(lat);
console.log(lng);
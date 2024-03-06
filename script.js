// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map((num)=>{return num*num});
console.log(squaredNumbers);

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

const getGrade=(score)=>{
    return score >= 90 ? 'A' :
    score >= 80 ? 'B' :
    score >= 70 ? 'C' :
    score >= 60 ? 'D' : 'F';           
}
console.log(getGrade(85));

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

const car = {
    companyName:"Volvstagen",
    model:"Polo",
    year:2019
}

const changeYear=(car,newYear)=>{
    car.year =newYear;
}

changeYear(car,2020);

const{model,year} = car;
console.log(`Model: ${model}, Year: ${year}`);

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

const array = [2,13,7,32,43,22,12];
const primearray = array.filter((element)=>{
    for(let i=2;i<element;i++){
        if(element%i==0) return false;
    }
    return element>1;
});
console.log(primearray);

// Q5 -  State different use cases of map, filter and reduce functions.

// Answer:
// Map: Used to transform each element of an array into something else, creating a new array with the transformed elements.
// Filter: Used to create a new array containing elements that pass a certain condition.
// Reduce: Used to accumulate values from an array into a single value, based on a provided function.


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

const fetchData = async() => {
   try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
   } catch (error) {
    console.error(error)
   }  
};
fetchData();

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
    name:"Abhinav",
    address:"123 downtown steet",
    contact:{
        phonenumber:9897989798
    }
}
console.log(person.contact?.phonenumber);
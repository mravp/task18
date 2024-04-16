// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array./

// array = [1,5,3,4,7,9,2]

// square_array = array.map(curr => curr * curr)
// console.log(square_array);




// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// function getGrade(score){
//     const grade = score > 80 ? "A" : score > 60 ? "B" : score > 40 ? "C" : score > 32 ? "D" : "F";
//     console.log(grade);
// }
// getGrade(42)
// getGrade(22)
// getGrade(32)
// getGrade(82)
// getGrade(62)

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// const car = {
//     company_name: "toyota",
//     model: "XUV",
//     year: 2012
// }
// function changeYear(newyear){
//     car.year = newyear
// }
// changeYear(2013)

// const {year, model} = car
// console.log(year, model);





// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// array = [1,5,3,4,7,9,2,19,27,43]
// primeArray = array.filter((curr) => {
//     if (curr < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(curr); i++) {
//         if (curr % i === 0) {
//             return false;
//         }
//     }
//     return true;
// })
// console.log(primeArray);


// Q5 -  State different use cases of map, filter and reduce functions.

// map =>  iterating
//         manipulation
//         transformation
//         rendering

// filter =>   searching
//             Selection
//             conditional

// reduce =>   grouping
//             sum of data
          


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.


// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error.message);
//     }
// }


// getData();


// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.


// const person = {
//     name: 'Aryan v',
//     address: {
//         city: 'Surat',
//         country: 'India'
//     },
//     contact: {
//         phone: '99999-88888',
//         email: 'hello@gmail.com'
//     }
// };


// const phoneNumber = person.contact?.phone;

// console.log(phoneNumber);

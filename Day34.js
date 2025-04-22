//This keyword & Function Methods [Call, Apply, Bind]!




// let person = { name: "John" };
// function greet() {
//     console.log("Hello, " + this.name);
// }
// let greetPerson = greet.bind(person);
// greetPerson();













//Problem Statement:
// Create a simple JavaScript object called student with properties: name, age, and course. 
// Then, use the JSON.stringify() method to convert the object into a JSON string and log it to the console.

// Example Input:
// let student = {
//     name: "Alice",
//     age: 22,
//     course: "Computer Science"
//   };
// Expected Output:
// {
//   "name": "Alice",
//   "age": 22,
//   "course": "Computer Science"
// }


// let student = 
// {
//   name: "Alice",
//   age: 22,
//   course: "Computer Science"
// };
// console.log(JSON.stringify(student));









//Problem Statement:
// Write a function called multiplyNumbers that accepts two 
// numbers as arguments and uses the apply() method to multiply them. 
// The function should return the product.

// function multiplyNumbers(a, b) 
// {
//     let help = 
//     {
//       multiply: function(x, y) 
//                 {
//                     return x*y;
//                 }
//     };
//     return help.multiply.apply(null, [a, b]);
// }
// console.log(multiplyNumbers(5, 4)); 
  









//Problem Statement:
//Write a function deepClone(obj) that creates a deep copy of a given object
// using JSON.stringify() and JSON.parse(). The function should ensure that 
// modifying the cloned object does not affect the original object.

// Example Input:
// { name: "Alice", hobbies: ["reading", "traveling"] }

// Example Output (After modifying the clone):
// Original: { name: "Alice", hobbies: ["reading", "traveling"] }
// Clone: { name: "Alice", hobbies: ["reading", "traveling", "coding"] }


// let obj = 
// { 
//     name: "Alice", 
//     hobbies: ["reading", "traveling"] 
// };

// let nObj = JSON.parse(JSON.stringify(obj));
// nObj.hobbies.push("coding"); 
// console.log(obj);
// console.log(nObj);
// const original = { details: { year: 1995 } };
// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.details.year = 2023;
// console.log(original.details.year); // 1995 (original remains unchanged)











// let rest1 = {
//     food: ['south Indian','North Indian', 'chinese']
// }

// let rest2 = {
//     food: ['south Indian','North Indian', 'chinese','Italian']
// }

// let rest3 = {
//     food: ['south Indian','North Indian',]
// }

// let rest4 = {
//     food: ['south Indian','North Indian','Continental','Mughlai']
// }

// function foodDelivery()
// {
//     console.log(this.food);
// }

// foodDelivery.call(rest1);
// foodDelivery.call(rest2);
// foodDelivery.call(rest3);
// foodDelivery.call(rest4);





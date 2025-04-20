//Define a global variable age.
//Create a function displayAge that prints the value of the age variable.
//Call the displayAge function to show how the global execution context works.
//Additionally, create another function changeAge that updates 
// the global age variable within the function, and print the value of age after updating it.

// let age = 22;

// let displayAge = function (age)
// {
//     return age;
// }
// let changeAge = function(age)
// {
//      return age -=2;
// }

// console.log(displayAge(age));
// console.log(changeAge(age));








//You have been provided with a script that is intended to handle
// a system for tracking book collections in a small library. 
// The script uses arrays and objects to manage information but contains 
// logical errors and syntax misuse, especially around ES6 features.
//Steps:
    // Debug and improve the addBook method to ensure all books added are valid and fully specified.
    // Read about the methods provided above in MDN
    // Review and correct the output of the system based on operations performed.
    // Refactor the code for better error handling and data integrity.

// const library = 
// {

//     books: [
//         { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
//     ],
    
//     addBook(book) {if (!book.title || !book.author || !book.year) {console.log("Book information is incomplete.");return;}this.books.push(book);},
//     findBookByTitle(title) {return this.books.find(book => book.title === title);},
//     removeBook(title) {const index = this.books.findIndex(book => book.title === title);if (index !== -1) {this.books.splice(index, 1);} else {console.log("Book not found.");} } 
// };

// library.addBook({ author: "George Orwell", year: 1949 });

// console.log(library.books.length);











//Problem Statement:
//You must correct a script that is intended to handle calculations 
// for a small e-commerce checkout system. The script includes functions 
// using ES6 syntax but suffers from issues related to type coercion and syntax errors.

// Steps:
    // Identify and correct the type coercion that incorrectly handles the price as a string.
    // Refactor the addItem method to ensure that it correctly validates and adds only items with valid numerical prices.
    // Fix any ES6 syntax errors and ensure the output format is consistent.

// const checkout = 
//     {
//         items: [],
//         total: 0,
//         addItem(item){if (typeof item.price !== 'number' || isNaN(item.price)) {console.log("Invalid price.");return;}this.items.push(item);this.total += item.price;},
//         getTotal(){return Total: $${parseFloat(this.total).toFixed(2)};} 
//     };
//     checkout.addItem({ name: "Coffee Maker", price: "99.95" });
//     checkout.addItem({ name: "Milk", price: 3.50 });
//     console.log(checkout.getTotal()); // Expected issue !












//Problem Statement:
//You need to debug and refactor a script meant to handle user profiles in an application. 
// The script uses object methods but has issues with method referencing and logical errors.

//Steps:
    // Correct the updateAge method to ensure it properly logs updated user details.
    // Fix any other method referencing errors or logical inconsistencies.
    // Ensure that all changes adhere to good practices in JavaScript ES6.

// const userProfile = 
//     {
//         name: "Alice",
//         age: 28,
//         details: function(){return `${this.name} is ${this.age} years old.`},
//         updateAge(newAge){if (newAge <= 0) {console.log("Invalid age.");return; }this.age = newAge;console.log(this.details); } 
//     };
//     userProfile.updateAge(30);
//     console.log(userProfile.details());
    // Expected: "Alice is 30 years old."



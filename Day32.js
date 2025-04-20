//HIGHER ORDER FUNCTIONS[HOF]!


















// const sum = [1, 2, 3].reduce((acc, val) => acc + val);
// console.log(sum);

















// const evenNumbers = [1, 2, 3, 4].filter((num) => num % 2 === 0);
// console.log(evenNumbers);

  











// const numbers = [1, 2, 3];
// const total = numbers.reduce((acc, val) => acc + val, 0);
// console.log(total);











// const values = [2, 3, 4];
// const result = values.map(x => x + 1).reduce((a, b) => a * b);
// console.log(result);









// const result = [5, 10, 15].reduce((acc, val) => acc + val, 0);
// console.log(result);









// Problem Statement:
// You are given an array of objects representing products. 
// Each product has a name and a price. Write a function processProducts 
// that uses map() to create a new array of product names, and then uses forEach() 
// to log each product name along with a message indicating whether the price is above or below $50.

// Steps:
    // Use map() to extract the product names.
    // Use forEach() to iterate over the products and log messages based on the price of each product.

// let Input =  
//     [
//         { name: "aptop", price: 1000 }, 
//         { name: "ouse", price: 20 }
//     ]
// let productNames = Input.map((obj)=>obj.name);
// console.log(productNames);

// Input.forEach(function (obj)
// {
//     if(obj.price>50)
//     {
//         console.log(`${obj.name} is above $50`);
//     }
//     else
//     {
//         console.log(`${obj.name} is below $50`);
//     }
// });












//Problem Statement:
// You are given an array of student objects. Each student object contains a name and marks. 
// Write a function processStudents that performs the following steps:

// 1- Filter the students to create a new array of students who scored above 60 marks.
// 2- Sort the filtered array in descending order of marks.
// 3- Map the sorted array to extract only the names of the students.
// 4- Return the array of sorted names.

//INPUT-
// { "name": "Alice", "marks": 58 },
// { "name": "Bob", "marks": 85 },
// { "name": "Charlie", "marks": 92 },
// { "name": "David", "marks": 45 },
// { "name": "Emma", "marks": 76 },
// { "name": "Frank", "marks": 63 },
// { "name": "Grace", "marks": 89 },
// { "name": "Hannah", "marks": 95 },
// { "name": "Ian", "marks": 54 },
// { "name": "Jack", "marks": 79 },
// { "name": "Kate", "marks": 67 },
// { "name": "Leo", "marks": 88 },
// { "name": "Mia", "marks": 91 },
// { "name": "Nathan", "marks": 72 },
// { "name": "Olivia", "marks": 82 }
// ]

//OUTPUT-
// ["Hannah", "Charlie", "Mia", "Grace", "Leo", "Bob", "Olivia", "Jack", "Emma", "Nathan", "Kate", "Frank"]

// let input = 
// [
//     { "name": "Alice", "marks": 58 },
//     { "name": "Bob", "marks": 85 },
//     { "name": "Charlie", "marks": 92 },
//     { "name": "David", "marks": 45 },
//     { "name": "Emma", "marks": 76 },
//     { "name": "Frank", "marks": 63 },
//     { "name": "Grace", "marks": 89 },
//     { "name": "Hannah", "marks": 95 },
//     { "name": "Ian", "marks": 54 },
//     { "name": "Jack", "marks": 79 },
//     { "name": "Kate", "marks": 67 },
//     { "name": "Leo", "marks": 88 },
//     { "name": "Mia", "marks": 91 },
//     { "name": "Nathan", "marks": 72 },
//     { "name": "Olivia", "marks": 82 }
// ]

// let filtered = input.filter(function (obj)
// {
//     return (obj.marks>60) ;
    
// })

// console.log(filtered);

// filtered.sort(function (a, b)
// {
//    b= b.marks;
//    a= a.marks;
//    return b-a;
// });

// console.log(filtered);

// let mapped = filtered.map(function(obj)
// {
//     return obj.name;
// })

// console.log(mapped);














// let input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

// let output = input.reduce(function (acc, curr)
// {
//     if (acc[curr]) {
//         acc[curr] = acc[curr] + 1;
//     } else {
//         acc[curr] = 1;
//     }
//     return acc;
// }, {});

// console.log(output);
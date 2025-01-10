// Problem Statement: Write an algorithm to determine if a number nis happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this processends in 1are happy.
// ** Hint** n=19
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1


// function happyNumber(number)
// {
//     let temp =0;
//     if(number === 1)
//     {
//         return 1;
//     }
//     else
//     {
//         while(number!==1)
//         {
//             temp = (number%10)**2
//         }
//     }

// }

// console.log(1%10);





// Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name N and M

// The value stored in N denotes the number of rows, and the value in M denotes the number of columns

// The 2D array is stored in a variable with the name arr

// You have to print the elements of the 2D array, row by row

// For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be

// 1 2

// 3 4

// 5 6

// let arr = [[1,2],[3,4],[5,6]];
// let M = 3;
// let N = 2;

// for(let i=0; i<M; i++)
// {
//     console.log(arr[i]);
// }

// let obj = {
//     firstName : 'Akhil',
//     lastName : 'singhania',
//     hobby : 'reading'
// }

// for(let heys in obj)
// {
//     console.log(`${heys} : ${obj[heys]}`);
// }

// console.log(y);
// var y=10;

// let greeting = 'hello';
// greeting = 'hyy';
// console.log(greeting);

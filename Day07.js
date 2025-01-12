// You are given a number stored in a variable with the name N You have to print
// all the numbers in the range from 1 to N*N, such that there are exactly N numbers on each line

// For example, if the value stored inN = 3, then all the numbers in the range, from [1,9]
// need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

// 1 2 3

// 4 5 6

// 7 8 9

// let arr = [
//   [1, 2, 3, 4],
//   [1, 2, 1, 2],
//   [1, 3, 1, 3],
//   [1, 4, 1, 4],
// ];
// let N = 4;
// let row = "";
// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     row = row+' '+arr[i][j];
//   }
//   console.log(row);
//   row = "";
// }

// You are given a number stored in a variable with the name N
// You have to print the pattern as shown below according to the value stored in N For example,
// consider the value stored in N = 5, then the required pattern will be.

// * * * * *

// *

// *

// *

// * * * * *

// let N = 5;
// let row = "";
// for (let i = 0; i < N; i++) {
//   if (i === 0 || i === N - 1) {
//     for (let j = 0; j < N; j++) {
//       row = row + " " + "*";
//     }
//     console.log(row);
//     row = "";
//   } else {
//     console.log("*");
//   }
// }

// Problem Statement : Given a non-negative integerk, decide whether
// there're two integers a and b such that a^2+ b^2= k.

// Hint : In the first sample test case, the value stored is = 25

// for the values a = 1, b = 2 , the sum of square = a*a + b*b = 3*3 + 4*4 = 25 ,which is equal to 25

// Thus the output is true.

// In the second sample test case, the value stored is = 7

// there is no value of a and b exists, which will be equal to c = 7

// Thus the output is false.

// let integer = 125;
// let str = integer.toString();
// console.log(str);

// if (str.length > 1) {
//   let sumOfSquare = 0;

//   for (let i = 0; i < str.length; i++) {
//     sumOfSquare = str[i] ** 2 + sumOfSquare;
//   }
//   if (sumOfSquare == integer) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// } else {
//   console.log("false");
// }



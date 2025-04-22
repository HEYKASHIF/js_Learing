//PLAYING WITH JSON AND DIFFRENT METHODS!







// let sentence = "JavaScript is fun , apparently";
// let words = sentence.split(' ');
// console.log(words.join('-'));






// let arr = [5, 2, 8, 4];
// arr.splice(1, 2, "new");
// console.log(arr);




//Problem Statement:
// Given an array of integers [15, 30, 45, 60, 75, 90], write a function 
// extractAndReverse that performs the following tasks:
    // 1- Use the slice method to extract a subarray from the third element (inclusive) to the fifth element (exclusive).
    // 2- Reverse the extracted subarray and return it.
// The original array should remain unchanged. The function should return the reversed subarray.

// let arr = [15, 30, 45, 60, 75, 90];
// function extractAndReverse(array)
// {
//     let narr = arr.slice(2,4);
//     narr = narr.reverse();
//     return narr;
// }

// console.log(extractAndReverse(arr));












//Problem Statement:
// Create a program that defines the following custom methods:

// 1- filterEvenNumbers(arr): This method takes an array of numbers and returns a new array with only the even numbers using filter.
// 2- sumOfArray(arr): This method calculates and returns the sum of all elements in an array using reduce.
// 3- sortAndConcat(arr1, arr2): This method takes two arrays of numbers, 
// sorts each array in ascending order using sort, and then concatenates 
// them into one array using concat. Return the sorted and concatenated array.

// Your program should:
// Take two input arrays of numbers.
// Use the custom methods to filter, sum, sort, and concatenate the arrays.
// Output the results of each operation.

// let arr1 = [11,2,33,4,55,6,77,8,99,10];
// let arr2 = [12,13,14,44,34,21,65,34,1];
// function filterEvenNumbers(arr)
// {
//     return arr.filter((a)=>a%2==0)
// }
// let filteredArr = filterEvenNumbers(arr1);
// console.log(filteredArr);
// function sumOfArray(arr)
// {
//     return arr.reduce((acc,bcc)=>acc+bcc)
// }
// let reducedArr = sumOfArray(filteredArr);
// console.log(reducedArr);
// function sortAndConcat(arr1, arr2)
// {
//     arr1.sort((a,b)=>a-b);
//     arr2.sort((a,b)=>a-b);
//     return arr1.concat(arr2);
//     // console.log(arr1);
// }

// console.log(sortAndConcat(arr1,arr2));
// function niceArray(N, array, K) {

//     let count = 0;
//     for(let i=N-1; i>=0; i--)
//     {
//       if(array[i]%2==0)
//       {
//         count++;
//       }
//     }

//     if(count>K)
//     {
//       console.log('Nice Array');
//     }
//     else
//     {
//       console.log('Bad Array');
//     }
//     //write code here

//   }

// code for the problem given by venu sir in flowchart lecture-2.
// let n = 5;

// let fact = 1;

// for(let i=1; i<=n; i++)
// {
//     fact = fact*i;
// }

// console.log(fact);

// Write the Psuedocode for below :

// You are given two numbers stored in two variables, with the name, num1 and num2.

// Print the result of the following operations:

// num1 > num2 -> this operation prints true, if num1 is greater than num2, otherwise it prints false
// num1 < num2 -> this operation prints true, if num1 is smaller than num2, otherwise it prints false
// num1 == num2 -> this operation print true, if num1 is equal to num2, otherwise it prints false
// You have to print the result of three operations in the order as shown above.

// let num1 = 10;
// let num2 = 25;

// if (num1 > num2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (num1 < num2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (num1 == num2) {
//   console.log("true");
// } else {
//   console.log("false");
// }




// Write the Psuedocode for below :

// You are provided with the dimensions of two rectangles. For the first 
// rectangle, you have lengths L1 and B1, and for the second rectangle, 
// you have lengths L2 and B2. You need to determine if the area of the 
// first rectangle is greater than the second, and if the perimeter of the 
// first rectangle is greater than the second.

// On the first line, print "true" if the area of rectangle 1 
// is greater than the area of rectangle 2; otherwise, print "false".
// On the second line, print "true" if the perimeter of rectangle 1 
// is greater than the perimeter of rectangle 2; otherwise, print "false".

// let L1 = 10;
// let B1 = 50;

// let L2 = 20;
// let B2 = 10;

// let Area1 = L1*B1;
// let Area2 = L2*B2;

// let Peri1 = 2*(L1+B1);
// let Peri2 = 2*(L2+B2);

// if(Area1>Area2)
// {
//     console.log('true');
// }
// else
// {
//     console.log('false');
// }

// if(Peri1>Peri2)
//     {
//         console.log('true');
//     }
//     else
//     {
//         console.log('false');
//     }


// Write the Psuedocode for below :

// You are given a number, stored in a variable named N. 
// Your task is to determine whether N is divisible by 3. 
// A number that is divisible by 3 will be evenly divisible, 
// meaning no remainder or fractional part after division.
// Print "Yes" if N is divisible by 3; otherwise, print "No".


// let n = 19;

// if(n%3==0)
// {
//     console.log('Yes');
// }
// else
// {
//     console.log('No');
// }


// You are given two numbers representing distance and time. 
// You need to calculate the speed using the formula speed = distance/time 
// and determine whether to apply brakes or keep going based on the speed.
// Print "Apply Brake" if the speed is greater than 40, otherwise print "Keep Going".

// let distance = 119;
// let time = 2;

// let speed = distance/time;

// if(speed>40)
// {
//     console.log('Apply Brake');
// }
// else
// {
//     console.log('Keep Going');
// }


// You are given two numbers, stored in variables with the names fuel and distance.
// You must calculate the value of required, determined by the product of fuel and distance.
// If required is greater than 50, the output should indicate that you have enough fuel,
// otherwise, you should continue the journey.
// Print "Enough" if the required fuel is greater than 50, else print "Go On".

// let fuel = 1;
// let distance = 46;

// let required = distance*fuel;

// if(required>50)
// {
//     console.log('Enough');
// }
// else
// {
//     console.log('Go On');
// }

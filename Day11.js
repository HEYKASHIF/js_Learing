// Write the Pseudocode for the below:

// You are given three numbers stored in three variables, with the names num1, num2, and num3.

// Print the result of the following operations:

// num1 > num2 && num1 > num3-> this operation prints true if num1 is greater than both num2 and num3, otherwise it prints false.
// num2 > num1 && num2 > num3 -> this operation prints true if num2 is greater than both num1 and num3, otherwise it prints false.
// num3 > num1 && num3 > num2 -> this operation prints true if num3 is greater than both num1 and num2, otherwise it prints false.

// num1 = 10;
// num2 = 20;
// num3 = 30;

// if (num1 > num2 && num1 > num3) print("true");
// else print("false");

// if (num2 > num1 && num2 > num3) print("true");
// else print("false");

// if (num3 > num1 && num3 > num2) print("true");
// else print("false");

// Problem Description
// Write the pseudocode for the following:

// You are provided with the radii of two circles. 
// For the first circle, the radius is R1, and for the second circle, 
// the radius is R2. You need to determine if the area of the first circle is greater than the second, 
// and if the circumference of the first circle is greater than the second.

// Input Format:
// The first line of input contains two space-separated integers 
// representing the radii of two circles: R1 and R2.

// Output Format:
// On the first line, print "true" if the area of circle 1 is 
// greater than the area of circle 2; otherwise, print "false". 
// On the second line, print "true" if the circumference of circle 1 is greater 
// than the circumference of circle 2; otherwise, print "false".




let arr = [3,5,2,7,10,9];

let n = arr.length; 

let temp1 = arr[0];
let temp2 = arr[n-1];
let res = 0;

for(let i=0; i<n; i++)
{   
    if(temp1<arr[i] && arr[i]<temp2) // 3<3<9
    {
        res = arr[i];
    }
}

console.log(res);
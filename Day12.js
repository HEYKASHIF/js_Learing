// Problem Statement: Write a program that calculates the area of a triangle given the base and the height. 
// The area is determined using the formula: Area = (Base X Height)/2
// Requirements: Calculate the area using the formula provided. 
// Print the result in a formatted string like: "The area of the triangle is: X" where X is the calculated area.

// Test Cases: Test Case 1: base = 10, height = 5. Expected output: "The area of the triangle is: 25.0"
// Test Case 2: base = 0, height = 15. Expected output: "The area of the triangle is: 0.0"
// Test Case 3: base = 8, height = 0. Expected output: "The area of the triangle is: 0.0"

// Edge Cases:
// Edge Case 1: What happens if one or both variables are zero? The output should be 0.0, as this represents a triangle with no area.
// Edge Case 2: What if negative variables are entered? The program should handle this by printing: "Invalid number, base and height must be positive numbers."


// let Height = 10;
// let Base = -20;

// if(Height<0 || Base<0)
// {
//     console.log('Invalid number, base and height must be positive numbers.');
// }
// else
// {
//     let Area = (Height*Base)/2;
//     console.log(`The area of the triangle is: ${Area}`);
// }



// Problem Statement: A store offers a 10% discount on items priced more than $20. 
// Develop a program to calculate and display the final price after the discount if applicable.

// Requirements: Apply a 10% discount if the price is greater than $20. Print the final price 
// formatted as: "The final price of the item is: Y" where Y is the price after any applicable discounts.

// Test Cases:
// Test Case 1: original price = $25. Expected output: "The final price of the item is: 22.5"
// Test Case 2: original price = $20. Expected output: "The final price of the item is: 20"
// Test Case 3: original price = $15. Expected output: "The final price of the item is: 15"

// Edge Cases:
// Edge Case 1: What if the price is exactly $20? The output should show no discount applied.
// Edge Case 2: What if the price is a negative number? The program should handle this by printing: "Invalid price, the price must be a non-negative number."

// let price = 25;
// let discount_in_percentage = 10;

// if(price<0)
// {
//     console.log('Invalid price, the price must be a non-negative number.');
// }
// else
// {
//     if(price>20)
//     {
//         let discount_in_dollors = (price*discount_in_percentage)/100;
//         let final_price = price-discount_in_dollors;
//         console.log(`The final price of the item is: ${final_price}`);

//     }
//     else
//     {
//         console.log(`The final price of the item is: ${price}`);

//     }
    
// }


// Problem Statement: Write a program that compares two input numbers and determines 
// which one is larger or if they are equal.

// Requirements: Compare the numbers using conditional statements. Print which number is 
// larger or if they are the same in a clear, formatted string.

// Test Cases:
// Test Case 1: number1 = 5, number2 = 10. Expected output: "10 is larger than 5"
// Test Case 2: number1 = 7, number2 = 7. Expected output: "Both numbers are equal"
// Test Case 3: number1 = -1, number2 = -10. Expected output: "-1 is larger than -10"

// Edge Cases:
// Edge Case 1: What if both numbers are zero? Expected output: "Both numbers are equal"
// Edge Case 2: What if the numbers are negative? The logic should still correctly identify which is larger or if they are equal.
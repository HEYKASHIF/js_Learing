// Problem Statement: Write a program that checks if a person is eligible for 
// a senior citizen discount based on their age. If the age is 60 or more, 
// the output should be "Eligible for Senior Discount". Otherwise, 
// the output should be "Not Eligible for Senior Discount". 
// Use the ternary operator for this task. Additionally, handle 
// an edge case where the age provided is a negative number or 0. 
// For such cases, output "Invalid Age".

// Example:

// let age = 65;

// Output: "Eligible for Senior Discount"

// let age = -1;

// Output: "Invalid Age"

// let age = 50;

// let output = age>0 ? age>=60 ? 'Eligible for Senior Discount' : 'Not Eligible for Senior Discount' : "Invalid Age"

// console.log(output);


// Problem Statement: Create a program that takes three numbers as 
// input and determines the largest number using nested ternary operators. 
// You must solve this problem using only ternary logic without using the Math.max() function.

// Example: let num1 = 45, num2 = 78, num3 = 33;

// Output: 78 (The largest number)

// function max(num1, num2, num3)
// {
//     return num1>num2 ? (num1>num3?num1:num3) : (num2>num3?num2:num3)

// }

// let greatest = max(52, 20, 40);

// console.log(greatest);

// Problem Statement: Write a program that classifies a product into different price categories based on its price:

// If the price is greater than or equal to 1000, classify it as "Expensive".
// If the price is between 500 and 999 (inclusive), classify it as "Moderate".
// If the price is less than 500 but greater than 0, classify it as "Affordable".
// If the price is 0, classify it as "Free".
// If the price is negative, classify it as "Invalid Price".
// You must use chained ternary operators to solve this problem.

// Example:

// let price = 750;

// Output: "Moderate"

// let price = 0;

// Output: "Free"

// let cost = 600;

// function product(price)
// {
//     return price>0? (price<500? ('Affordable') : (price<1000? 'Moderate' : 'Expensive')) : (price===0?'Free':'Invalid Price')

// }

// let productoutput = product(cost);

// console.log(productoutput);



// Problem Statement: Write a program that dynamically generates a message 
// for different user roles stored in an object. The object contains a user’s name, 
// role, and active status. Based on the role and active status, print the following messages:

// If the user is "admin" and is active, print "Admin Access Granted!".

// If the user is "admin" and is not active, print "Admin Access Revoked".

// If the user is "user" and is active, print "User Access Granted!".

// If the user is "user" and is not active, print "User Access Revoked".

// For any other role, print "Access Denied".

// Use the ternary operator to handle this logic.

// Example:

// let user = { name: "Alice", role: "admin", active: false };

// Output: "Admin Access Revoked"

// let user = { name: "Bob", role: "user", active: true };

// Output: "User Access Granted!"

// let p1 = {
//     'name' : 'akhil',
//     'role' : 'admin',
//     'status' : 'true'
// }

// let p2 = {
//     'name' : 'bhaskar',
//     'role' : 'admin',
//     'status' : 'false'
// }

// let p3 = {
//     'name' : 'ashish',
//     'role' : 'user',
//     'status' : 'true'
// }

// let p4 = {
//     'name' : 'suraj',
//     'role' : 'user',
//     'status' : 'false'
// }

// let p5 = {
//     'name' : 'ashish',
//     'role' : 'HR',
//     'status' : 'true'
// }




// function permission(anyPerson)
// {
//     return anyPerson.role==='admin'? (anyPerson.status==='true'?'Admin Access Granted!':'Admin Access Revoked') : (anyPerson.role==='user'?(anyPerson.status==='true'?'User Access Granted!':'User Access Revoked'):('Access Denied'))
// }

// let Access = permission(p1);

// console.log(Access);


// Problem Statement: Design a system that determines access privileges for a platform 
// based on a user's role, experience (in years), active status (active or inactive), 
// and department. The program should provide access levels that vary according to a combination of these factors.

// Conditions:

// For the "admin" role:
// If active, has more than 5 years of experience, and is in the "IT" department, grant "Full IT Admin Access".
// If active, has more than 5 years of experience, but is in any other department, grant "Full General Admin Access".
// If active but has 5 years or less of experience, grant "Limited Admin Access", regardless of department.
// If inactive, grant "Admin Access Revoked".
// For the "manager" role:
// If active, has more than 3 years of experience, and is in the "Sales" department, grant "Full Sales Manager Access".
// If active, has more than 3 years of experience, but in any other department, grant "Full Manager Access".
// If active, has 3 years or fewer of experience, grant "Limited Manager Access", regardless of department.
// If inactive, grant "Manager Access Revoked".
// For the "user" role:
// If active and from "Support" department, grant "Priority Support Access" .
// If active but not from the "Support" department, grant "User Access".
// If inactive, grant "User Access Revoked".
// For any other role, output "Invalid Role".
// Additional Conditions:

// The system should dynamically determine the department based on user input.
// The program should use nested ternary operators to handle the decision-making process based on role, experience, department, and status.
// Ensure your code is scalable for adding more roles or departments in the future.
// Example:

// let person = { role: "admin", experience: 7, active: true, department: "IT" };

// Output: "Full IT Admin Access"

// let person = { role: "manager", experience: 4, active: true, department: "Marketing" };

// Output: "Full Manager Access"

// let person = { role: "user", experience: 2, active: true, department: "Support" };

// Output: "Priority Support Access"

// let person = { role: "admin", experience: 3, active: false, department: "Finance" };

// Output: "Admin Access Revoked"





// let p1 = {
//     'name' : 'akhil',
//     'role' : 'admin',
//     'status' : 'true',
//     'department' : "IT",
//     'experience' : 6
// }


// let p6 = {
//     'name' : 'akhil',
//     'role' : 'admin',
//     'status' : 'true',
//     'department': "Finance",
//     'experience' : 8
// }

// let p2 = {
//     'name' : 'bhaskar',
//     'role' : 'manager',
//     'status' : 'false',
//     'department': "Sales",
//     'experience' : 5
// }

// let p3 = {
//     'name' : 'ashish',
//     'role' : 'user',
//     'status' : 'true',
//     'department': "Support",
//     'experience' : 5
// }

// let p4 = {
//     'name' : 'suraj',
//     'role' : 'user',
//     'status' : 'false',
//     'department': "Support",
//     'experience' : 5
// }

// let p5 = {
//     'name' : 'ashish',
//     'role' : 'HR',
//     'status' : 'true',
//     'department': "IT",
//     'experience' : 5
// }




// function permission(anyPerson)
// {
//     return anyPerson.role==='admin'? (anyPerson.status==='true'? (anyPerson.experience>5?(anyPerson.department==='IT'?'Full IT Admin Access':'Full General Admin Access'):('Limited Admin Access')) : 'Admin Access Revoked') : (anyPerson.role==='manager'?(anyPerson.status==='true'? (anyPerson.experience>3?(anyPerson.department==='Sales'?'Full Sales Manager Access':'Full Manager Access'):('Limited Manager Access')) : 'Manager Access Revoked') : (anyPerson.role==='user'?(anyPerson.status==='true'? (anyPerson.department==='Support'?'Priority Support Access':'User Access') : ('User Access Revoked')) : ('Invalid Role')))
// }

// let Access = permission(p6);

// console.log(Access);



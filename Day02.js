//Create an array that stores the temperatures recorded over 7 days.
//Use indexing to access the temperature for the 4th day and update it
//to a new value by adding 2 degrees. After that, log the updated temperatures
//for all 7 days to the console.

// let arrTemp = [10, 11, 9, 8, 13, 10, 5];

// arrTemp[3] = arrTemp[3]+2;

// console.log(arrTemp);

//Problem Statement: Write a function called greetUser that prompts the user to enter their name using the prompt() function.
//If the user enters a name, greet them with the message: "Hello, !". If no name is provided (i.e., the user presses "Cancel"
// or enters an empty string), the function should use a default name "Guest" and greet them with: "Hello, Guest!".
//equirements:
//Use a function expression. Ensure the function handles cases where the user cancels or leaves the input empty.

// function userName()
// {
//     let name = prompt('PLease, Enter your name : ');
//     if(name=='' || name==null){
//         return 'Guest';
//     }
//     else
//     {
//         return name;
//     }

// }

// function greetUser(name)
// {
//     console.log(`Hello ${name}`);
// }

// let user = userName();
// greetUser(user);

//You are developing a task management system that tracks pending tasks for the day. Create an array with five tasks.
// Implement the following operations without using specific method references:

// 1- Remove the first task from the list.
// 2- Add two new high-priority tasks to the beginning of the list.
// 3- Replace the last task in the list with a new task.
// 4- Log the updated task list after all operations.

// let arrTask = ['reading', 'writing', 'speaking', 'listening', 'shoping']

// //Removing the first task from the list.
// // let temp = arrTask[0];
// // for(let i=0; i<arrTask.length-1; i++)
// // {
// //     arrTask[i]=arrTask[i+1];

// // }

// let arr1 = [];
// for(let i=0; i<arrTask.length-1; i++)
// {
//     arr1[i]=arrTask[i+1];
// }

// // console.log(arr1);

// //Add two new high-priority tasks to the beginning of the list.
// let arr2 = [];
// for(let i=0; i<arr1.length+2; i++)
// {
//     if(i==0)
//     {
//         arr2[i]='rivision';
//     }
//     else if(i==1)
//     {
//         arr2[i]='breakfast';

//     }
//     else
//     {
//         arr2[i]=arr1[i-2];
//     }
// }
// console.log(arr2);

// //Replacing the last task in the list with a new task.
// arr2[arr2.length-1]='sleep';

// //Log the updated task list after all operations.
// console.log(arr2);

//Problem Statement: Write a function called generatePassword that takes three parameters: length, includeNumbers, and includeSpecialChars.
// The function should generate a random password of the given length. If the user doesn't specify
// whether to include numbers or special characters, the function should default to including them.

// includeNumbers is a boolean that indicates whether to include numbers in the password.
// Default to true. includeSpecialChars is a boolean that indicates whether to include special characters.
// Default to false. The function should ensure that the generated password meets the following conditions:

// Contains at least one uppercase letter. If includeNumbers is true, includes at least one number.
// If includeSpecialChars is true, includes at least one special character (like @, #, !). Example:

// If generatePassword(10, true, true) is called, it might return a password like "Ab1@deF2Gh".





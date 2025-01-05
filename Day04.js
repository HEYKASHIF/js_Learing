// let str = 'Hello';

// for(let i=0; i<str.length; i++)
// {
//     console.log(str[i]);
// }

// let fruits = ['apple', 'banana', 'mango'];
// console.log(fruits.indexOf('banana'));

// Problem Statement: Create an array that stores the temperatures recorded over 7 days.
//Use indexing to access the temperature for the 4th day and update it to a new value by adding 2 degrees.
// After that, log the updated temperatures for all 7 days to the console.

// let arrTemp = [20, 21, 23, 18, 26, 22, 25];

// arrTemp[3]=arrTemp[3]+2;

// console.log(arrTemp);

// Problem Statement: Create an array that represents your daily to-do list with 5 tasks.
// Add a new task to the beginning of the list. Then, remove the last task from the list.
// Finally, log the updated to-do list to the console.

// let arrTask = ['facewash', 'coffee', 'running', 'reading', 'breakfast']

// let arrTaskNew = [];

// for(let i=0; i<=arrTask.length; i++)
// {
//     if(i===0)
//     {
//         arrTaskNew[i] = 'alarmOff';
//     }
//     else
//     {
//         arrTaskNew[i] = arrTask[i-1];
//     }

// }

// arrTaskNew.pop();

// console.log(arrTaskNew);

// Problem Statement: You are developing a task management system that tracks pending tasks for the day.
// Create an array with five tasks. Implement the following operations without using specific method references:
// Remove the first task from the list.
// Add two new high-priority tasks to the beginning of the list.
// Replace the last task in the list with a new task.
// Log the updated task list after all operations.

// let arrTask = ["facewash", "coffee", "running", "reading", "breakfast"];

// let arrT1 = [];
// for (let i = 1; i < arrTask.length; i++) {
//   arrT1[i - 1] = arrTask[i];
// }
// // console.log(arrT1);

// let arrT2 = [];
// for (let i = 0; i < arrT1.length + 2; i++) {
//   if (i === 0) {
//     arrT2[i] = "alarmOff";
//   } else if (i === 1) {
//     arrT2[i] = "aGlassOfWater";
//   } else {
//     arrT2[i] = arrT1[i - 2];
//   }
// }
// // console.log(arrT2);

// arrT2[arrT2.length-1] = 'writing';
// console.log(arrT2);

// Problem Statement: You are creating a score management system for student results.
// Start with an array of 10 student scores. The program should do the following:
// For any student with a score below 40, increase their score by 20.
// For students with scores over 90, adjust their score to a maximum of 90.
// Count and log how many students passed (score of 50 or more) after the adjustments.
// Log the final adjusted array of scores.

// let arrMarks = [90, 20, 85, 25, 98, 99, 27, 96, 94, 23];

// for(let i=0; i<arrMarks.length; i++)
// {
//     if(arrMarks[i]<40)
//     {
//         arrMarks[i]=arrMarks[i]+20;
//     }
//     else if(arrMarks[i]>90)
//     {
//         arrMarks[i]=90;
//     }
// }

// let count = 0;
// for(let i=0; i<arrMarks.length; i++)
// {
//     if(arrMarks[i]>=50)
//     {
//         count++;
//     }
// }

// console.log(`${count} students passed the exam!`);
// console.log(arrMarks);

// Write a function called generatePassword that takes three parameters: length, includeNumbers,
// and includeSpecialChars. The function should generate a random password of the given length.
// If the user doesn't specify whether to include numbers or special characters, the function should default to including them.

// includeNumbers is a boolean that indicates whether to include numbers in the password. Default to true.
// includeSpecialChars is a boolean that indicates whether to include special characters. Default to false.

// The function should ensure that the generated password meets the following conditions:

// Contains at least one uppercase letter.
// If includeNumbers is true, includes at least one number.
// If includeSpecialChars is true, includes at least one special character (like @, #, !).

// If generatePassword(10, true, true) is called, it might return a password like "Ab1@deF2Gh".

function generatePassword(len, includeNumbers, includeSpecialChars) {
  let password = "";
  let i = 0;
  while (i < len) {
    console.log(i);

    if (i < len) {
      password = password + "O";
      i = password.length;
    }
    if (includeNumbers == true && i < len) {
      password = password + 9;
      i = password.length;
    }
    if (i < len) {
      password = password + "k";
      i = password.length;
    }
    if (i < len) {
      password = password + "W";
      i = password.length;
    }
    if (includeSpecialChars == true && i < len) {
      password = password + "&";
      i = password.length;
    }
    if (i < len) {
      password = password + "m";
      i = password.length;
    }
    if (i < len) {
      password = password + "s";
      i = password.length;
    }
    if (i < len) {
      password = password + "z";
      i = password.length;
    }
  }

  return password;
}

let iN = true;
let iSC = false;

let l = +prompt(
  "Enter the length of the password : [length should be greater than 7] "
);
iN = +prompt("Do you want numbers in your password? enter True or False : ");
iSC = +prompt(
  "Do you want special characters in your password? enter True or False : "
);

let pass = generatePassword(l, iN, iSC);

console.log(pass);

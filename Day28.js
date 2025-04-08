//Coding Club Fight!
// function codingClubFight(piyushPower,playersArr,n)
// {
//   let count = 0;
//   let powerSum = 0;
//   let res = '';
//   for(let i=0; i<n; i++)
//   {
//     if(playersArr[i]<=piyushPower)
//     {
//       count++;
//       powerSum+=playersArr[i];
//     }
//   }
//   res+=count;
//   res+=' '+powerSum;
//   return res;
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let n = +input[0];
//   let playersArr = [];
//   let line = 1
//   for(let i=0; i<n; i++)
//   {
//     playersArr.push(+input[line++]);
//   }
//   // console.log(n,nArr);
//   let q = +input[line++];
//   for(let i=0; i<q; i++)
//   {
//     let piyushPower = +input[line++];
//     let res = codingClubFight(piyushPower,playersArr,n);
//     console.log(res);
//   }
// }






//Optimise the curve!
// function optimiseTheCurve(A,B,C,K)
// {
//   let low = 0;
//   let high = K;
  
//   let res = -1;
//   while(low<=high)
//   {
    
//     let mid = low+Math.floor((high-low)/2);
//     let leftSide = (A*(mid*mid)+B*(mid)+C);
//     if(leftSide>=K)
//     {
//       res = mid;
//       high = mid-1;
//     }
//     else
//     {
//       low = mid+1;
//     }
//   }
//   return res==0?-1:res;
// }
// function runProgram(input) 
// {  
//   input = input.split('\n');
//   let tc = +input[0];
//   for(let i=0; i<tc; i++)
//   {
//     let arr = input[i+1].split(' ').map(Number);
//     let A = arr[0];
//     let B = arr[1];
//     let C = arr[2];
//     let K = arr[3];
//     let res = optimiseTheCurve(A,B,C,K);
//     console.log(res);
//   }
// }







//Machines At Work!
// function machinesAtWork(targetItems,n,machinesArray)
// {
//   let low = 1;
//   let high = Math.max(...machinesArray)*targetItems;
//   let res = 0;
//   while(low<=high)
//   {
//     let mid = low+Math.floor((high-low)/2);
//     let items  = 0;
//     for(let i=0; i<n; i++)
//     {
//       items+=parseInt(mid/machinesArray[i]);
//     }
//     if(items>=targetItems)
//     {
//       res = mid;
//       high = mid-1;
//     }
//     else
//     {
//       low = mid+1;
//     }
//   }
//   return res;
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let line1 = input[0].split(' ').map(Number);
//   let n = line1[0];
//   let targetItems = line1[1];
//   let machinesArray = input[1].split(' ').map(Number);
//   let res = machinesAtWork(targetItems,n,machinesArray);
//   console.log(res);
// }







//Casino And The Dealer!
// function casinoAndTheDealer(k,m,n,tArray)
// {
//   let low = 1;
//   let high = Math.max(...tArray);
//   let res = -1;
  
//   while(low<=high)
//   {
//     let count = 0;
//     let deck = 0;
//     let mid = low+Math.floor((high-low)/2);
//     for(let i=0; i<n; i++)
//     {
//       if(tArray[i]<=mid)
//       {
//         count++;
//         if(count==k)
//         {
//           deck++;
//           count = 0;
//         }
//       }
//       else
//       {
//         count = 0;
//       }
//     }
//     if(deck>=m)
//     {
//       res = mid;
//       high = mid-1;
//     }
//     else
//     {
//       low = mid+1;
//     }
//   }
//   return res;
// }
// function runProgram(input)
// {
//   input = input.split('\n');
//   let tc = +input[0];
//   let line = 1;
//   for(let i=0; i<tc; i++)
//   {
//     let line1 = input[line++].split(' ').map(Number);
//     let n = line1[0];
//     let m = line1[1];
//     let k = line1[2];
//     let tArray = input[line++].split(' ').map(Number);
//     let res = casinoAndTheDealer(k,m,n,tArray);
//     console.log(res);
//   }
// }



// function sum(a,b)
// {
//     return a+b;
// }

// let summ = function (a,b)
// {
//     return a+b;
// }

// let arr = [1,2,3,4,5];

// let sumarr = (arr)=>{
//     let sum = 0;
//     for(let i=0; i<arr.length; i++)
//     {
//         sum+=arr[i];
//     }
//     return sum;
// }

// let greetings = (fName, lName)=>`Hey ${fName}, ${lName} Welcome`

// let user = {
//     userName: "Bheem",
//     userDesignation: "Manager",
//     skills: {
//         softSkills:['communication','leaderships'],
//         techSkills:['js','react','Node.js']
//     }
// }

// let {userDesignation, skills, softSkills} = user;
// console.log(userDesignation);

// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b);

// let arr1 = [1,2,3,4,5];
// let arr2 = [11,22,33,44,55];
// let fin = [...arr1,...arr2];
// console.log(fin);

// const multiply = (a, b) => {
//     return a * b;
//   }
//   console.log(multiply(2));

// //   const { name, age } = null;

//   const add = (a, b = 5) => a + b;
// console.log(add(10));



//Problem Statement:-
//Write an arrow function that takes a number as input and returns 
// both its square and cube in an object, using implicit return. 
// The function should be as concise as possible.
//Requirements:-
// The arrow function should use implicit return (no curly braces or return keyword).
// The function should return an object in the format { square, cube }.
//Example Input:
//5
//Example Output:
//{ square: 25, cube: 125 }

let sumSquare = (number) => ({Square: number*number, cube: number*number*number})
console.log(sumSquare(50));

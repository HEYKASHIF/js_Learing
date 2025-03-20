//Recursion!
//Factorial By Recursion!
// function factorial(n) 
// {
//   if (n == 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// let n=5;
// let res = factorial(n);
// console.log(res);





//Home Work!
// function fun(n)
// {
//     if(n==0)
//     {
//         return;
//     }
//     else
//     {
//         fun(n-1);
//         console.log(n);
//     }
// }
// fun(4);
// console.log('******************************************************************');
// function fun2(n)
// {
//     if(n==0)
//     {
//         return;
//     }
//     else
//     {
//         console.log(n);
//         fun2(n-1);
        
//     }
// }
// fun2(4)





//GCD Impletation by recursion!
// function gcdByRecursion(a,b)
// {
//   if(a==0)
//   {
//     return b;
//   }
//   else
//   {
//     return gcdByRecursion(b%a,a);
//   }
  
// }


// function implementGcd(a,b)
// {
//   // console.log(a,b);
//   let res = gcdByRecursion(a,b);
//   console.log(res);
// }





// function runProgram(input) {
  
//   let sInput = input.split('\n');
//   // console.log(sInput);
//   let testCase = Number(sInput[0]);
//   let line = 1;
//   for(let i=0; i<testCase; i++)
//   {
//     let arr = sInput[line++].split(' ').map(Number);
//     let a = arr[0];
//     let b = arr[1];
//     implementGcd(a,b);
//   }
//   // Write code here
// }





//Power Function Impletation By Recursion!
// function pfRecursion(a,b)
// {
//   if(b==0)
//   {
//     return 1;
//   }
//   else
//   {
//     return a*pfRecursion(a,b-1);
//   }
// }
// function powerFunction(a,b)
// {
//   // console.log(a,b);
//   let res = pfRecursion(a,b);
//   console.log(res);
// }
// function runProgram(input) 
//{
//   let arr = input.split(" ").map(Number);
//   let a = arr[0];
//   let b = arr[1];
//   powerFunction(a,b);
//   // Write code here
// }





//Sum Of Array By Recursion!
// function ebRecursion(n,arr)
// {
//   if(n==0)
//   {
//     return 0;
//   }
//   else
//   {
//     return arr[n-1]+ebRecursion(n-1,arr);
//   }
// }
// function easyBut(n, arr)
// {
//   // console.log(n,arr);
//   let res = ebRecursion(n,arr);
//   console.log(res);
// }
// function runProgram(input) {
//   let sInput = input.split("\n");
//   let testCase = Number(sInput[0]);
//   let line = 1;
//   for(let i=0; i<testCase; i++)
//   {
//     let size = Number(sInput[line++]);
//     let arr = sInput[line++].split(' ').map(Number);
//     easyBut(size, arr);
//   }
//   // Write code here
// }





//Length Of A String By Recursion!
// function lengthByRecursion(str)
// {
//   if(str[0]==undefined)
//   {
//     // console.log('if part')
//     return 0;
//   }
//   else
//   {
//     return 1+lengthByRecursion(str.slice(1));
//   }
  
// }

// function findLength(str)
// {
//   // s = " ";
//   // console.log(arr.empty())
//   let res = lengthByRecursion(str);
//   // console.log(str.slice(1))
//   console.log(res);
// }


// function runProgram(input) {
  
//   findLength(input);
//   // Write code here
// }






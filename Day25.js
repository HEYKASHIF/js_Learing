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






//GP & Recursion!
// function rFunction(n,r)
// {
//   if(n==0)
//   {
//     return 1;
//   }
//   else
//   {
//     return (1/r**n)+(rFunction(n-1,r));
//   }
// }
// function gpRecursion(n,r)
// {
//   let res = rFunction(n,r);
//   console.log(res.toFixed(4));
// }
// function runProgram(input) {
  
//   let arr = input.split(' ').map(Number);
//   let n = arr[0];
//   let r = arr[1];
//   gpRecursion(n,r);
//   // Write code here
// }





//Number Of Ways 2!
// function recursivefun(n)
// {
//   if(n==0)
//   {
//     return 1;
//   }
//   else if(n<0)
//   {
//     return 0;
//   }
//   else 
//   {
//     return recursivefun(n-1)+recursivefun(n-3)+recursivefun(n-5);
//   }
// }
// function NumberOfWays(n)
// {
//   // console.log(n)
//   let res = recursivefun(n);
//   console.log(res);
// }
// function runProgram(input) 
// {
  
//   let sInput = input.split('\n');
//   let testCase = Number(sInput[0]);
//   let line = 1;
//   for(let i=0; i<testCase; i++)
//   {
//     let n = Number(sInput[line++]);
//     NumberOfWays(n);
//   }
// }





//Bob And Boxes!
// function recursivefunc(N)
// {
//   if(N==0)
//   {
//     return 1;
//   }
//   else if(N<0)
//   {
//     return 0;
//   }
//   else 
//   {
//     return recursivefunc(N-1)+recursivefunc(N-3)+recursivefunc(N-5);
//   }
// }
// function BobAndBoxes(N)
// {
//   let res = recursivefunc(N);
//   console.log(res);
// }
// function runProgram(input) {
//   BobAndBoxes(Number(input));
// }





//Power Sum!
// function recursivefun(X,N,value)
// {
  
  
//     let remaining = X-value**N;
//     if(remaining==0) return 1;
//     else if(remaining<0) return 0;
//     return recursivefun(remaining,N,value+1)+recursivefun(X,N,value+1);

// }
// function PowerSum(X,N)
// {
//   // console.log(X,N);
//   let value  = 1;
//   let res = recursivefun(X,N,value);
//   console.log(res);
// }
// function runProgram(input) 
// {
  
//   let arr = input.split(' ').map(Number);
//   let X = arr[0];
//   let N = arr[1];
//   PowerSum(X,N);
// }





//Recursive Bubble Sort!
// function recursiveBubbleSort(n,arr)
// {
//   if(n==1)
//   {
//     return arr;
//   }
//   else
//   {
//     for(let i=0; i<n-1; i++)
//     {
//       if(arr[i]>arr[i+1])
//       {
//         let temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//       }
//     }
//     return recursiveBubbleSort(n-1,arr);
//   }
// }
// function runProgram(input) 
// {
  
//   let sInput = input.split('\n');
//   let n = Number(sInput[0]);
//   let arr = sInput[1].split(' ').map(Number);
//   // console.log(n,arr);
//   let arrNew = recursiveBubbleSort(n,arr);
  
//   console.log(arrNew.join(" "));
//   // Write code here
// }




//Ways To Zero!
// function waysToZero(N)
// {
//   // console.log(N);
//   if(N==0)
//   {
//     return 1;
//   }
//   else if(N<0)
//   {
//     return 0;
//   }
//   else 
//   {
//     return waysToZero(N-1)+waysToZero(N-2)+waysToZero(N-5);
//   }
// }
// function runProgram(input) 
// {
  
//   let sInput = input.split('\n');
//   let testCase = Number(sInput[0]);
//   let line = 1;
//   for(let i=0; i<testCase; i++)
//   {
//     let N = Number(sInput[line++]);
//     // console.log(N);
//     let result = waysToZero(N);
//     console.log(result);
//   }
// }







//Mr. Robot Elliot Problem!
// function robotElliot(start,end,str)
// {
//   // console.log(str);
//   let m = Math.floor((start+end)/2);
//   // console.log(str[m]);
//   if(start==end)
//   {
//     return str[start];
//   }
//   else if(start>end)
//   {
//     return "";
//   }
//   else
//   {
//     return str[m]+robotElliot(start,m-1,str)+robotElliot(m+1,end,str);
//   }
// }
// function runProgram(input) 
// {
  
//   input = input.split('\n');
//   let tc = Number(input[0]);
//   let line = 1;
//   for(let i=0; i<tc; i++)
//   {
//     let n = Number(input[line++]);
//     let str = input[line++];
//     let res = robotElliot(0,n-1,str);
//     console.log(res);
//   }
// }
//Stacks!
//Use Side Lane!
// function solve(n,arr){
  
//     let result = [];
//     let sideLineStack = [];
//     let currentTruckNo = 1;
//     for(let i=0; i<n; i++)
//     {
//       sideLineStack.push(arr[i]);
//       while(sideLineStack.length>0 && sideLineStack[sideLineStack.length-1]==currentTruckNo)
//       {
//         result.push(sideLineStack.pop());
//         currentTruckNo++;
//       }
//     }
//     if(sideLineStack.length==0)
//     {
//       console.log('yes');
//     }
//     else
//     {
//       console.log('no');
//     }
//   }

  //Reverse Infix Postfix(convert postfix to infix)!
// function postfixToInfix(a)
// {
//   let Stack = [];
//   for(let i=0; i<a.length; i++)
//   {
//     if(a[i]=='+' || a[i]=='-' || a[i]=='/' || a[i]=='*' || a[i]=='%' || a[i]=='^')
//     {
//       let temp1 = Stack.pop();
//       let temp2 = Stack.pop();
//       Stack.push(`(${temp2+a[i]+temp1})`);
//     }
//     else
//     {
//       Stack.push(a[i]);
//     }
//   }
//   console.log(Stack.join(" "));
// }





//palindrome Check Using Stack!
// function palindromeCheckUsingStack(str)
// {
//   let stack = [];
//   let i=0;
//   let j=str.length-1;
//   while(i<j)
//   {
//     stack.push(str[i]);
//     if(stack[stack.length-1]==str[j])
//     {
//       stack.pop();
//     }
//     else
//     {
//       console.log('NO');
//       return;
//     }
//     i++;
//     j--;
//   }
//   console.log('YES');
// }

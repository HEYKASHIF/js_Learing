//Binary Search!





//Binary Search through recursion!
// function binarySearch(k,low,high,arr)
// {
//   let mid = Math.floor((low+high)/2);
//   if(low>high)
//   {
//     return -1;
//   }
//   else if(arr[mid]==k)
//   {
//     return 1;
//   }
//   else if(arr[mid]<k)
//   {
//     return binarySearch(k,low,mid-1,arr);
//   }
//   else
//   {
//     return binarySearch(k,mid+1,high,arr);
//   }
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let line1 = input[0].split(' ').map(Number);
//   let n = line1[0];
//   let k = line1[1];
//   let arr = input[1].split(' ').map(Number);
//   // console.log(k,n,arr);
//   let res = binarySearch(k,0,n-1,arr);
//   console.log(res);
//   // Write code here
// }







//****************************************** */
//My approach of finding square root of a number!
// function sqrRoot(x) {
//   let i=1;
//   while(i*i<=x)
//   {
//     if(i*i==x)
//     {
//       console.log(i);
//       return ;
//     }
//     i++;
//   }
//   console.log(i-1);
//   return;
// // write your code here
// }

//Venu Sir way of finding square root of a number!
// function sqrt(x)
// {
//   let i=1;
//   while(i*i<=x)
//   {
//     i++;
//   }
//   console.log(i-1);
// }
//Venu Sir 2nd way of finding square root of a number!












//Sorted And Rotated Problem!
// function sortedAndRotated(n,arr)
// {
//   let count = 0;
//   if(arr[n-1]>arr[0])
//   {
//     return 'NO';
//   }
//   else
//   {
//     for(let i=0; i<n-1; i++)
//     {
//       if(arr[i]>arr[i+1])
//       {
//         count++;
//       }
//     }
//     if(count==1)
//     {
//       return 'YES';
//     }
//     else
//     {
//       return 'NO';
//     }
//   }
// }
// function runProgram(input)
// {
//   input = input.split('\n');
//   let n = Number(input[0]);
//   let arr = input[1].split(' ').map(Number);
//   let res = sortedAndRotated(n,arr);
//   console.log(res);
// }



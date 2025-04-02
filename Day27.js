//Binary Search Iterative!
// function binarySearchIterative(k,n,arr)
// {
//   let low = 0;
//   let high = n-1;
//   while(low<=high)
//   {
//     let mid = low+Math.floor((high-low)/2);
//     if(k==arr[mid])
//     {
//       return 1;
//     }
//     else if(k<arr[mid])
//     {
//       high = mid-1;
//     }
//     else
//     {
//       low = mid+1;
//     }
//   }
//   return -1;
// }
// function runProgram(input)
// {
//   input = input.split('\n');
//   let line1 = input[0].split(' ').map(Number);
//   let n = line1[0];
//   let k = line1[1];
//   let arr = input[1].split(' ').map(Number);
//   let res = binarySearchIterative(k,n,arr);
//   console.log(res);
//   // Write code here
// }







//Discover Number!
// function discoverNumber(Q,n,arr)
// {
//   // console.log(Q,n,arr);
//   let low = 0;
//   let high = n-1;
//   while(low<=high)
//   {
//     let mid = low+Math.floor((high-low)/2);
//     if(Q==arr[mid])
//     {
//       // console.log('if part');
//       return 'YES';
//     }
//     else if(Q<arr[mid])
//     {
//       high = mid-1;
//     }
//     else
//     {
//       low = mid+1;
//     }
//   }
//   return 'NO';
  
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let line1 = input[0].split(' ').map(Number);
//   let n = line1[0];
//   let qR = line1[1];
//   let arr = input[1].split(' ').map(Number);
//   arr = arr.sort((a,b)=>a-b);
//   for(let i=0; i<qR; i++)
//   {
//     let Q = +input[i+2];
//     let res = discoverNumber(Q,n,arr);
//     console.log(res);
//   }
// }





//Upper Bound In LogN!
// function upperBound(k,n,arr)
// {
//   // console.log(k,n,arr);
//   let low = 0;
//   let high = n-1;
//   let res = -Infinity;
//   while(low<=high)
//   {
//     let mid = low+Math.floor((high-low)/2);
//     if(k<arr[mid])
//     {
//       high = mid-1;
//       res = mid;
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
//   let k = line1[1];
//   let arr = input[1].split(' ').map(Number);
//   let res = upperBound(k,n,arr);
//   console.log(res);
// }



//Lower Bound In LogN(here lower bound means first element that is equal to K)!
// function lowerBound(k,n,arr)
// {
//   let low = 0;
//   let high = n-1;
//   let res = -1;
//   while(low<=high)
//   {
//     let mid = low+Math.floor((high-low)/2);
//     if(k==arr[mid])
//     {
//       res = mid;
//       high = mid-1;
//     }
//     else if(k<arr[mid])
//     {
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
//   let k = line1[1];
//   let arr = input[1].split(' ').map(Number);
//   let res = lowerBound(k,n,arr);
//   console.log(res);
// }




//Square Root Of An Integer(Without Binary Search)!
// function squareRoot(N)
// {
//   let i=1;
//   while(i*i<=N)
//   {
//     i++;
//   }
//   return i-1;
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let tc = input[0];
//   for(let i=0; i<tc; i++)
//   {
//     let N = input[i+1];
//     let res = squareRoot(N);
//     console.log(res);
//   }
// }





//Everything Related To Binary Search!
// function lowerBound(k,n,arr)
// {
//   let low = 0;
//   let high = n-1;
//   let res = -1;
//   while(low<=high)
//   {
//     let mid = low+Math.floor((high-low)/2);
//     if(k==arr[mid])
//     {
//       res = mid;
//       high = mid-1;
//     }
//     else if(k<arr[mid])
//     {
//       high = mid-1;
//     }
//     else
//     {
//       low = mid+1;
//     }
//   }
//   return res;
// }
// function upperBound(k,n,arr)
// {
//   let low = 0;
//   let high = n-1;
//   let res = -1;
//   while(low<=high)
//   {
//     let mid = low+Math.floor((high-low)/2);
//     if(k==arr[mid])
//     {
//       res = mid;
//       low = mid+1;
//     }
//     else if(k<arr[mid])
//     {
//       high = mid-1;
//     }
//     else
//     {
//       low = mid+1;
//     }
//   }
//   return res;
// }
// function everythingRelatedToBinarySearch(k,n,arr)
// {
//   let lB = lowerBound(k,n,arr);
//   let uB = upperBound(k,n,arr);
//   let difference = (uB-lB)+1;
//   console.log(lB,uB,difference);
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let n = +input[0];
//   let arr = input[1].split(' ').map(Number);
//   let k = +input[2];
//   everythingRelatedToBinarySearch(k,n,arr);
// }




//Square Root Of An Integer(With Binary Search)!
// function squareRoot(N)
// {
//   let low = 1;
//   let high = N;
//   let res = 0
//   while(low<=high)
//   {
//     let mid = low+Math.floor((high-low)/2);
//     if(mid*mid==N)
//     {
//       res = mid;
//       break;
//     }
//     else if(mid*mid<N)
//     {
//       low = mid+1;
//       res = mid;
//     }
//     else
//     {
//       high = mid-1;
//     }
//   }
//   return res;
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let tc = input[0];
//   for(let i=0; i<tc; i++)
//   {
//     let N = input[i+1];
//     let res = squareRoot(N);
//     console.log(res);
//   }
// }





//
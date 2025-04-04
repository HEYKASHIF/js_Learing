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





//Number Of Occurence In LogN Time!
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
// function numberOfOccurence(k,n,arr)
// {
//   let lB = lowerBound(k,n,arr);
//   if(lB==-1)
//   {
//     return 0;
//   }
//   let uB = upperBound(k,n,arr);
//   return (uB-lB)+1;
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let line1 = input[0].split(' ').map(Number);
//   let n = line1[0];
//   let k = line1[1];
//   let arr = input[1].split(' ').map(Number);
//   let res = numberOfOccurence(k,n,arr);
//   console.log(res);
// }




//Q4!
// function lower_bound(arr, target)
// {
//     let low = 0;
//     let high = arr.length;
//     while(low<=high)
//     {
//         let mid = (low + high)/2; // 2
//         if(arr[mid] < target)
//         {
//             low = mid + 1;
//         }
//         else
//         {
//             high = mid;
//         }
//     }
//     return low;        
// }
// let arr = [2, 3, 3, 5, 6, 8, 10]
// let target = 4
// console.log(lower_bound(arr, target));



//Q5!
// function upper_bound(arr, target)
// {
//     let low = 0;
//     let  high = arr.length;
//     while (low < high)
//     {
//         let mid = (low + high)/2; // 2
//         if (arr[mid] <= target)
//         {
//             low = mid + 1;
//         }
//         else
//         {
//             high = mid;
//         }
//     }
//     return low
// }
// let arr = [2, 3, 3, 5, 6, 8, 10];
// let target = 3;
// console.log(upper_bound(arr, target));







//*********************************************
// function minInSortedAndRotated(n,k,arr){
  
//     if(arr[0]<arr[n-1])
//     {
//       console.log(arr[0]);
//       return ;
//     }
//     if(arr[n-1]<arr[n-1])
//     {
//       console.log(arr[n-1]);
//       return ;
//     }
//     let low = 1;
//     let high = n-2;
//     while(low<=high)
//     {
//       let mid = low+Math.floor((high-low)/2);
//       if(arr[mid]<arr[mid-1] && arr[mid]<arr[mid+1])
//       {
//         console.log(arr[mid]);
//         return ;
//       }
//       else if(arr[mid]>arr[mid+1])
//       {
//         low = mid+1;
//       }
//       else
//       {
//         high = mid-1;
//       }
//     }
  
//   // write your code here
//   }
  
//**************************************************
function searchInSortedAndRotated(n,k,arr){
  
    let low = 0;
    let high = n-1;
    while(low<=high)
    {
      let mid = low+Math.floor((high-low)/2);
      if(k==arr[mid])
      {
        console.log(mid);
        return ;
      }
      else if(arr[low]<arr[mid] && (arr[low]<k && k<arr[mid]))
      {
        high = mid-1;
      }
      else
      {
        low = mid+1;
      }
    }
    console.log(-1);
  //write your code here    
  }







//   function findingPeak(n,mountainHeights){
  
//     let arr = mountainHeights;
//     if(n==1)
//     {
//       console.log(0)
//       return ;
//     }
//     let low = 0;
//     let high = n-1;
//     let res = -1;
//     while(low<=high)
//     {
//       let mid = low+Math.floor((high-low)/2);
//       if(arr[mid]>arr[(mid-1)%n] && arr[mid]>arr[(mid+1)%n])
//       {
//         console.log(mid);
//         return ;
//       }
//       else if(arr[mid]<arr[(mid-1)%n])
//       {
//         high = mid-1;
//       }
//       else
//       {
//         low = mid+1;
//       }
      
//     }
//     console.log(-1);
//     return;
  // write your code here
//   }
  


  /*
  function minimumInSortedAndRotated(n,arr)
{
  
  let low = 0;
  let high = n-1;
  while(low<=high)
  {
    let mid = low+Math.floor((high-low)/2);
    if(arr[low]<=arr[mid] && arr[mid]<=arr[high])
    {
      return arr[low];
    }
    if(arr[mid]<=arr[(mid-1)%n] && arr[mid]<=arr[(mid+1)%n])
    {
      return arr[mid];
    }
    if(arr[low]<=arr[mid])
    {
      low = mid+1;
    }
    else
    {
      high = mid-1;
    }
  }
  return -1;
  // console.log(n,arr);
}
  */ 




/*
function minimumInSortedAndRotated(n, arr) {
    let low = 0;
    let high = n - 1;
    
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);

        // If the array is already sorted, return the first element
        if (arr[low] <= arr[high]) {
            return arr[low];
        }

        // Check if mid is the minimum element
        if (mid > 0 && arr[mid] < arr[mid - 1]) {
            return arr[mid];
        }

        // If the left part is sorted, the minimum is in the right part
        if (arr[low] <= arr[mid]) {
            low = mid + 1;
        } else {
            high = mid; // mid itself can be the minimum
        }
    }
    
    return arr[low]; // At the end, low will point to the minimum element
}
*/
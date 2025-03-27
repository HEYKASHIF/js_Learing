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
function sqrRoot(x) {
  let i=1;
  while(i*i<=x)
  {
    if(i*i==x)
    {
      console.log(i);
      return ;
    }
    i++;
  }
  console.log(i-1);
  return;
// write your code here
}

//Venu Sir way of finding square root of a number!
function sqrt(x)
{
  let i=1;
  while(i*i<=x)
  {
    i++;
  }
  console.log(i-1);
}
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






//Lower Bound in LOG(n) Time!
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
//       res=mid;
//       high=mid-1;
//     }
//     else if(k<arr[mid])
//     {
//       high=mid-1;
//     }
//     else
//     {
//       low=mid+1;
//     }
//   }
//   return res;
// }
// function runProgram(input)
//{
//   input = input.split('\n');
//   let line1 = input[0].split(' ').map(Number);
//   let n = line1[0];
//   let k = line1[1];
//   let arr = input[1].split(' ').map(Number);
//   let res = lowerBound(k,n,arr);
//   console.log(res);
// }





//Count Frequency Of A Number In An Array Through Binary Search!
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
//       res=mid;
//       high=mid-1;
//     }
//     else if(k<arr[mid])
//     {
//       high=mid-1;
//     }
//     else
//     {
//       low=mid+1;
//     }
//   }
//   return res;
// }
// //******************************************************************************
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
//       res=mid;
//       low=mid+1;
//     }
//     else if(k<arr[mid])
//     {
//       high=mid-1;
//     }
//     else
//     {
//       low=mid+1;
//     }
//   }
//   return res;
// }
// //******************************************************************************
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let n = Number(input[0]);
//   let arr = input[1].split(' ').map(Number);
//   let k = Number(input[2]);
//   let lB = lowerBound(k,n,arr);
//   if(lB==-1)
//   {
//     console.log(lB,lB,0);
//     return ;
//   }
//   let uB = upperBound(k,n,arr);
//   let res = (uB-lB)+1;
//   console.log(lB,uB,res);
// }






//Discover Number!
// function discoverNumber(k,low,high,arr)
// {
//   arr = arr.sort((a,b)=>a-b);
//   let mid = low+Math.floor((high-low)/2);
//   if(low>high)
//   {
//     return 'NO';
//   }
//   else if(arr[mid]==k)
//   {
//     return 'YES';
//   }
//   else if(arr[mid]<k)
//   {
//     return discoverNumber(k,low,mid-1,arr);
//   }
//   else
//   {
//     return discoverNumber(k,mid+1,high,arr);
//   }
// }
// function runProgram(input)
// {
//   input = input.split('\n');
//   let line1 = input[0].split(' ').map(Number);
//   let n = line1[0];
//   let QN = line1[1];
//   let arr = input[1].split(' ').map(Number);
//   for(let i=0; i<QN; i++)
//   {
//     let k = Number(input[i+2]);
//     let res = discoverNumber(k,0,n-1,arr);
//     console.log(res);
//   }
// }
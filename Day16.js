//frequency!
// function freq(arr)
// {
//     let obj = {};
//     for(let i=0; i<arr.length; i++)
//     {
//         if(obj[arr[i]])
//         {

//             obj[arr[i]] = obj[arr[i]]+1;
//         }
//         else
//         {
//             obj[arr[i]] = 1;

//         }
//     }
//     return obj;
// }

// let obj = freq([1,1,1,1,1,2,2,2,2])


// let frequency = 0;
// let element =0;
// for(let key in obj)
// {
//     if(obj[key]>frequency)
//     {
//         frequency = obj[key];
//         element = key;
//     }
    
// }
// console.log(frequency, element);



//Longest Palindromic subString!
// let S = 'thisracecarisgood';
// let tempArr = [];
//   for(let i=0; i<S.length; i++)
//   {
//     let sub = '';
//     for(let j=i; j<S.length; j++)
//     {
//       sub+=S[j];
//       let n = sub.length;
//       let flag = true;
//       for(k=0; k<n/2; k++)
//       {
//         if(sub[k]!=sub[n-1-k])
//         {
//           flag = false;
//           break;
//         }
//       }
//       if(flag)
//       {
//         tempArr.push(n);
//       }
//     }
//   }
  
//   let res = tempArr[0];
//   for(let x=0; x<tempArr.length; x++)
//   {
//     if(res<tempArr[x])
//     {
//       res=tempArr[x];
//     }
//   }
//   console.log(res);


//The Midlle Element!
// let arr = [1,4,4,5,3,6,7,8,9];
// let N = arr.length;
// console.log(N);

// function elementInMiddle(N,arr){
  
  
//   for(let i=1; i<N-1; i++)
//   {
//     let leftCheck = true;
//     for(let h=i-1; h>=0; h--)
//     {
//       if(arr[h]>arr[i])
//       {
//         leftCheck = false;
//         break;
//       }
//     }
    
//     let rightCheck = true;
//     for(let j=i+1; j<N; j++)
//     {
//       if(arr[j]<arr[i])
//       {
//         rightCheck = false;
//         break;
//       }
//     }
    
//     if(leftCheck && rightCheck)
//     {
//       console.log(arr[i]);
//       return;
//     }
//   }
//   console.log(-1);
// // Write your code here!
// }
// elementInMiddle(N,arr);
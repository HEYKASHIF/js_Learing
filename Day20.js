//Digit Sum Sort!
// function digitSum(arr)
// {
//   let tempArr = [...arr];
//   // console.log(tempArr);
//   let dSArray = [];
//   for(let i=0; i<tempArr.length; i++)
//   {
//     let temp = 0;
//     while(tempArr[i]>0)
//     {
//       temp+=tempArr[i]%10;
//       tempArr[i] = parseInt(tempArr[i]/10);
//     }
//     dSArray.push(temp);
//   }
  
//   // console.log(arr);
//   return dSArray;
// }



// function digitSumSort(arr,N)
// {
//   for(let i=0; i<(N-1); i++)
//   {
//     for(let j=0; j<(N-i-1); j++)
//     {
//       if(arr[j]>arr[j+1])
//       {
//         let temp2 = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp2;
//       }
//     }
//   }
//   // console.log(arr);
//   let dSArray = digitSum(arr);
//   // console.log(arr);
  
//   for(let i=0; i<(N-1); i++)
//   {
//     for(let j=0; j<(N-i-1); j++)
//     {
//       if(dSArray[j]>dSArray[j+1])
//       {
//         let temp1 = dSArray[j];
//         dSArray[j] = dSArray[j+1];
//         dSArray[j+1] = temp1;
        
        
//         let temp2 = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp2;
//       }
//     }
//   }
//   console.log(arr.join(' '));
//   // console.log(dSArray);
  
// }
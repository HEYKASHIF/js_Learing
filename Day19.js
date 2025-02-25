//Push, Pop And Top!
// let Stack = [];
// function pushPopAndTop(arr)
// {
  
//   if(arr[0]==1)
//   {
//     Stack.push(arr[1]);
//   }
//   else if(arr[0]==2 && Stack.length>0)
//   {
//     Stack.pop();
//   }
//   else if(arr[0]==3)
//   {
//     if(Stack.length>0)
//     {
//       console.log(Stack[Stack.length-1]);
//     }
//     else
//     {
//       console.log("Empty!");
//     }
    
//   }
  
// }






//Masai Restaurant!
// let Stack = [];
// function masaiRestaurant(arr)
// {
//   // console.log(arr);
//   if(arr[0]==2)
//   {
//     Stack.push(arr[1]);
//   }
//   else if(arr[0]==1)
//   {
//     if(Stack.length>0)
//     {
//       console.log(Stack.pop());
//     }
//     else
//     {
//       console.log("No Food");
//     }
//   }
  
// }






//Remove Adjacent Duplicates!
// function removeAdjacentDuplicates(arr,N)
// {
//   let Stack = [];
//   Stack.push(arr[0]);
//   for(let i=1; i<N; i++)
//   {
//     if(Stack[Stack.length-1]==arr[i])
//     {
//       Stack.pop();
//     }
//     else
//     {
//       Stack.push(arr[i]);
//     }
//   }
//   console.log(Stack.join(''));
// }






//Smaller Neighbour Element!
// function smallerNeighbourElement(arr,N)
// {
//   let resultStack = [];
//   resultStack.push(-1);
//   let ElementStack = [];
//   ElementStack.push(arr[0]);
  
//   for(let i=1; i<N; i++)
//   {
//     let flag = true;
//     while(ElementStack.length>0)
//     {
//       if(ElementStack[ElementStack.length-1]<arr[i])
//       {
//         resultStack.push(ElementStack[ElementStack.length-1]);
//         flag = false;
//         break;
//       }
//       else
//       {
//         ElementStack.pop();
//       }
      
//     }
//     ElementStack.push(arr[i]);
//     if(flag)
//     {
//       resultStack.push(-1);
//     }
//   }
//   console.log(resultStack.join(' '));
// }





//Remove Duplicates using 2-Pointer!
// function removeDuplicates(arr,N)
// {
//   let i=0;
//   let j=1;
//   let countUnique = 1;
//   while(j<N)
//   {
//     if(arr[i]!=arr[j])
//     {
//       i++;
//       arr[i]=arr[j];
//       countUnique++;
//     }
//     j++;
//   }
//   console.log(countUnique);
//   console.log(arr.slice(0,i+1).join(' '));
//   // for(let )
// }

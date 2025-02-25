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





//Triplet Sum!
// function tripletSum(arr,N)
// {
//   // console.log(arr);
//   arr = arr.sort((a,b)=>a-b);
//   // console.log(arr,N);
//   let k=N-1;
//   while(1<k)
//   {
//     let i=0;
//     let j=k-1;
//     while(i<j)
//     {
//       if(arr[i]+arr[j]==arr[k])
//       {
//         console.log(1);
//         return;
//       }
//       else if(arr[i]+arr[j]>arr[k])
//       {
//         j--;
//       }
//       else
//       {
//         i++;
//       }
//     }
//     k--;
//   }
//   console.log(0);
// }





//Again a classic Problem!
function againAClassicalProblem(str)
{
  // console.log(str);
  let Stack = [];
  for(let i=0; i<str.length; i++)
  {
    if(str[i]=='(' || str[i]=='[' || str[i]=='{')
    {
      Stack.push(str[i]);
    }
    else
    {
      // console.log(str[i]);
      
      if(Stack.length==0)
      {
        console.log('not balanced');
        return;
      }
      let temp = Stack.pop();
      // console.log(temp)
      if((temp=='(') && (str[i]!=')'))
      {
        console.log('not balanced');
        return;
      }
      else if((temp=='[') && (str[i]!=']'))
      {
        console.log('not balanced');
        return;
      }
      else if((temp=='{') && (str[i]!='}'))
      {
        console.log('not balanced');
        return;
      }
    }
  }
  // console.log(Stack);
  if(Stack.length==0)
  {
    console.log('balanced');
    // return;
  }
  else
  {
    console.log('not balanced');
    // return;
  }
}

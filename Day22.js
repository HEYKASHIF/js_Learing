//Stacks!
//Use Side Lane!
function solve(n,arr){
  
    let result = [];
    let sideLineStack = [];
    let currentTruckNo = 1;
    for(let i=0; i<n; i++)
    {
      sideLineStack.push(arr[i]);
      while(sideLineStack.length>0 && sideLineStack[sideLineStack.length-1]==currentTruckNo)
      {
        result.push(sideLineStack.pop());
        currentTruckNo++;
      }
    }
    if(sideLineStack.length==0)
    {
      console.log('yes');
    }
    else
    {
      console.log('no');
    }
  }
//Coding Club Fight!
// function codingClubFight(piyushPower,playersArr,n)
// {
//   let count = 0;
//   let powerSum = 0;
//   let res = '';
//   for(let i=0; i<n; i++)
//   {
//     if(playersArr[i]<=piyushPower)
//     {
//       count++;
//       powerSum+=playersArr[i];
//     }
//   }
//   res+=count;
//   res+=' '+powerSum;
//   return res;
// }
// function runProgram(input) 
// {
//   input = input.split('\n');
//   let n = +input[0];
//   let playersArr = [];
//   let line = 1
//   for(let i=0; i<n; i++)
//   {
//     playersArr.push(+input[line++]);
//   }
//   // console.log(n,nArr);
//   let q = +input[line++];
//   for(let i=0; i<q; i++)
//   {
//     let piyushPower = +input[line++];
//     let res = codingClubFight(piyushPower,playersArr,n);
//     console.log(res);
//   }
// }





//Optimise the curve!
function optimiseTheCurve(A,B,C,K)
{
  let low = 0;
  let high = K;
  
  let res = -1;
  while(low<=high)
  {
    
    let mid = low+Math.floor((high-low)/2);
    let leftSide = (A*(mid*mid)+B*(mid)+C);
    if(leftSide>=K)
    {
      res = mid;
      high = mid-1;
    }
    else
    {
      low = mid+1;
    }
  }
  return res==0?-1:res;
  // console.log(A,B,C,K);
}


function runProgram(input) {
  
  input = input.split('\n');
  let tc = +input[0];
  for(let i=0; i<tc; i++)
  {
    let arr = input[i+1].split(' ').map(Number);
    let A = arr[0];
    let B = arr[1];
    let C = arr[2];
    let K = arr[3];
    let res = optimiseTheCurve(A,B,C,K);
    console.log(res);
  }
  // Write code here
}
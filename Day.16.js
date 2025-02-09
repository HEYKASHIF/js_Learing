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
let S = 'thisracecarisgood';
let tempArr = [];
  for(let i=0; i<S.length; i++)
  {
    let sub = '';
    for(let j=i; j<S.length; j++)
    {
      sub+=S[j];
      let n = sub.length;
      let flag = true;
      for(k=0; k<n/2; k++)
      {
        if(sub[k]!=sub[n-1-k])
        {
          flag = false;
          break;
        }
      }
      if(flag)
      {
        tempArr.push(n);
      }
    }
  }
  
  let res = tempArr[0];
  for(let x=0; x<tempArr.length; x++)
  {
    if(res<tempArr[x])
    {
      res=tempArr[x];
    }
  }
  console.log(res);
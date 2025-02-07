//ASCII Problems!

// let S = 'aba';
// let sum = 0;
// for(let i=0; i<S.length; i++)
// {
//     sum = sum + (S.charCodeAt(i)-96);
// }
// console.log('Z'.charCodeAt(0));

// String.fromCharCode(90 - 1);


//Good-Array or Bad-Array
// let arr = [1,2,3,4,5,6,7,8,9];
// let N = arr.length;
// let K = Math.floor(N/5);
// function niceArray(N, array, K) {
  
//     let evenCount = 0;
    
//     for(let i=0; i<N; i++)
//     {
//       if(array[i]%2==0)
//       {
//         evenCount++;
//       }
//     }
//     // console.log(K)
//     // console.log(evenCount)
    
//     if(K<evenCount)
//     {
//       console.log('Nice Array');
//     }
//     else
//     {
//       console.log('Bad Array');
//     }
//     //write code here
    
    
//   }

//   niceArray(N, arr, K);



//Alan & Christopher problem!
// let S = 'a#bc';

// let empty = '';
// for(let i=0; i<S.length; i++)
// {
//     if(S[i+1]=='#' || S[i]=='#')
//     {
//         continue;
//     }
//     else
//     {
//         empty+=S[i];
//     }
// }
// console.log(empty);


//DeCompress The String!
// let str = 'a2b3';
// let nstr = '';
//   for(let i=1; i<str.length; i+=2)
//   {
//     for(let j=1; j<=str[i]; j++)
//     {
//       nstr+=str[i-1];
//     }
    
//   }
//   console.log(nstr);


// let arr = [16,17,4,3,5,2,3];
// let n = arr.length;

// let narr = [];

// for(let i=0; i<n-1; i++)
// {
//     let flag = true;
//     for(let j=i+1; j<n; j++)
//     {
//         if(arr[i]<arr[j])
//         {
//             flag = false;
//             break;
//         }
//     }
//     if(flag)
//     {
//         narr.push(arr[i]);
//     }
// }

// narr.push(arr[n-1]);
// console.log(narr);




//Encryption of a given string!
//S is given string, K is no. of rotaions.!
// function encryptIt(S,K) {
  
//     //(ascii-(48)/(65)/(97)+K)%(26)/(10)+(48)/(65)/(97)
//     let newStr = '';
//     for(let i=0; i<S.length; i++)
//     { 
//       let ascii = S.charCodeAt(i);
//       if(48<=ascii && ascii<=57)
//       {
//         newStr = newStr + String.fromCharCode(((ascii-48+K)%10)+(48));
//       }
//       else if(65<=ascii && ascii<=90)
//       {
//         newStr = newStr + String.fromCharCode(((ascii-65+K)%26)+(65));
//       }
//       else if(97<=ascii && ascii<=122)
//       {
//         newStr = newStr + String.fromCharCode(((ascii-97+K)%26)+(97));
//       }
//       else
//       {
//         newStr = newStr + S[i];
//       }
//     }
    
//     console.log(newStr);
//       // write code here
      
//   }



//New York Skylines(find score array)!
let arr = [1,4,3,2,7];
let n = arr.length;
function newYorkSkylines(n, arr) {
  
    let sArr = [];
    for(let i=0; i<n; i++)
    {
      let count = 0;
      if(i==0)
      {
        if(arr[i]>arr[i+1])
        {
          count++;
        }
        
      }
      else if(i==n-1)
      {
        if(arr[i]>arr[i-1])
        {
          count++;
        }
        
        
      }
      else
      {
        if(arr[i]>arr[i-1])
        {
          count++;
        }
        if(arr[i]>arr[i+1])
        {
          count++;
        }
      }
      
      
      
      sArr.push(count);
    }
    
    console.log(sArr.join(' '));
      // write your code here
  }

 newYorkSkylines(n, arr);



  
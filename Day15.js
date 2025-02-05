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



let S = 'a#bc';

let empty = '';
for(let i=0; i<S.length; i++)
{
    if(S[i+1]=='#' || S[i]=='#')
    {
        continue;
    }
    else
    {
        empty+=S[i];
    }
}
console.log(empty);
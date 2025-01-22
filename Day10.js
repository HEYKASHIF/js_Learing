// function niceArray(N, array, K) {
  
//     let count = 0;
//     for(let i=N-1; i>=0; i--)
//     {
//       if(array[i]%2==0)
//       {
//         count++;
//       }
//     }
    
//     if(count>K)
//     {
//       console.log('Nice Array');
//     }
//     else
//     {
//       console.log('Bad Array');
//     }
//     //write code here
    
    
//   }

// code for the problem given by venu sir in flowchart lecture-2.
let n = 5;

let fact = 1;

for(let i=1; i<=n; i++)
{
    fact = fact*i;
}

console.log(fact);
  
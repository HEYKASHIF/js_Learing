// function numberPattern(N){

//     let New = N+(N-1);
//     let Lnew = N*2;
//     let count = 1;

//     for(let i=1; i<=New; i++)
//     {
//       let row = '';
//       if(count<=N)
//       {
//         for(let j=1; j<=i; j++)
//         {
//           row = row+j;

//         }

//         console.log(row);
//         count++;
//       }
//       else
//       {
//         for(let k=1; k<=(Lnew-i); k++)
//         {
//           row = row+k;
//         }
//         console.log(row);
//       }
//     }
//   }

// Problem Statement: Given a square matrix, you have to find the reverse U
// traversal of the matrix. Refer the sample I/O for better understanding.
// Refer the given figure for better understanding.

// Note: No element should be visited more than once.

// let arr = [
//   [1, 2, 3],
//   [2, 4, 6],
//   [4, 8, 12],
// ];

// let N = [0,1,2,3,4,3,2,1]

// for(let i=0; i<arr.length; i++)
// {
//   for(let j=0; j<arr[i].length; j++)
//   {
//     if(i+j == N[i+j])
//     {
//       console.log(arr[i][j]);
//     }

//   }
// }

// Problem Statement:**You are given a number stored in a
// variable with the name N You have to print the pattern as
// shown below according to the value stored in N For example,
// consider the value stored in N = 5, then the required pattern will be.

// * * * * *

// *

// *

// *

// * * * * *

// let N = 5;

// for(let i=1; i<=N; i++)
// {
//   if(i==1 || i==N)
//   {
//     let endToEnd = '';
//     for(let j=1; j<=N; j++)
//     {
//         endToEnd+='* ';
//     }
//     console.log(endToEnd);
//   }
//   else
//   {
//     console.log('*');

//   }

// }

// Problem Statement: You are given a 2D array, whose dimensions are stored in two variables with the name Nand M

// The value stored in N denotes the number of rows, and the value in M denotes the number of columns

// The 2D array is stored in a variable with the name arr

// You have to print the sum of indexes of the 2D array for all positions in the 2D array

// For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be

// At index (0,0), the sum of indexes becomes (0 + 0 = 0)

// At index (0,1), the sum of indexes becomes (0 + 1 = 1)

// At index (1,0), the sum of indexes becomes (1 + 0 = 1)

// At index (1,1), the sum of indexes becomes (1 + 1 = 2)

// At index (2,0), the sum of indexes becomes (2 + 0 = 2)

// At index (2,1), the sum of indexes becomes (2 + 1 = 3)

// Therefore, the output becomes

// 0 1

// 1 2

// 2 3

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// let N = arr.length;
// let M = arr[0].length;

// // console.log(M);

// for(let i=0; i<N; i++)
// {
//   let row = '';
//   for(let j=0; j<M; j++)
//   {
//     sum = i+j;
//     row=row+sum+' ';
//   }
//   console.log(row);
// }

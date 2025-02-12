//Traverse a 2D-Array!
// let matrix = [
//   [1, 8, 9],
//   [2, 7, 10],
//   [3, 6, 11],
//   [4, 5, 12],
// ];
// let N = matrix.length;
// let M = matrix[0].length;
// function traverse2dArray(N, M, matrix) {
//   let empty = "";
//   for (let i = 0; i < M; i++) {
//     for (let j = N - 1; j >= 0; j--) {
//       empty += matrix[j][i] + " ";
//     }
//   }
//   console.log(empty);
//   //write code here
// }





//Go In Zig-Zag!
// function goInZigZag(N, M, matrix){
  
//     let empty = '';
//     for(let j=0; j<N; j++)
//     {
//       if(j%2==0)
//       {
//         for(let i=M-1; i>=0; i--)
//         {
//           empty+=matrix[j][i]+' ';
//         }
//       }
//       else
//       {
//         for(let i=0; i<M; i++)
//         {
//           empty+=matrix[j][i]+' ';
//         }
//       }
    
//     }
//     console.log(empty);
//       //write code here
    
//   }





//Rick n Richards!
//   function ricknRichards(n,A){
  
//     let i=0;
//     let j=n-1;
    
//     let Rick = 0;
//     let Richard = 0;
    
//     length = 0;
    
//     while(i<=j)
//     {
//       if(length<=0)
//       {
//         length+=A[i];
//         Rick++;
//         i++;
//       }
//       else
//       {
//         length-=A[j]*2;
//         Richard++;
//         j--
//       }
//     }
    
//     console.log(Rick, Richard);
//       //write code here
//   }


  
  
  
//specific diagonal!
//   function specificDiagonals(R, C, matrix, K){
  
//     let rP = 0;
//     let cP = 0;
//     for(let i=0; i<R; i++)
//     {
//       for(let j=0; j<C; j++)
//       {
//         if(matrix[i][j]==K)
//         {
//           rP = i;
//           cP = j;
//           break;
//         }
//       }
//     }
    
//     let sum = rP+cP;
//     // console.log(sum);
//     let difference = rP-cP;
//     // console.log(difference);
//     let empty1 = '';
//     let empty2 = '';
//     for(let i=0; i<R; i++)
//     {
//       for(let j=0; j<C; j++)
//       {
//           if(i-j==difference)
//           {
            
//             empty1+=matrix[i][j]+' ';
//           }
//           if(i+j==sum)
//           {
//             empty2+=matrix[i][j]+' ';
//           }
//       }
//     }
//       console.log(empty1);
//       console.log(empty2);
    
    
//       //write code here
    
//   }
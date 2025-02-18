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





//Swastik & Sum!
// function solve(n,m,matrix){
  
//     let sum1 = 0;
//     for(let i=0; i<=(n-1)/2; i++)
//     {
//       sum1+=matrix[i][0];
//     }
//     for(let j=1; j<=(m-2); j++)
//     {
//       sum1+=matrix[(n-1)/2][j];
//     }
//     for(let i=(n-1)/2; i<=(n-1); i++)
//     {
//       sum1+=matrix[i][m-1];
//     }
//     // console.log(sum1);
    
//     let sum2 = 0;
//     for(let j=(m-1); j>=((m-1)/2)+1; j--)
//     {
//       sum2+=matrix[0][j];
//     }
//     for(let i=0; i<=(n-1); i++)
//     {
//       sum2+=matrix[i][(m-1)/2];
//     }
//     for(let j=((m-1)/2)-1; j>=0; j--)
//     {
//       sum2+=matrix[n-1][j];
//     }
//     // console.log(sum2);
    
//     console.log(Math.abs(sum1-sum2));
    
      
//   }





//Sum Of Boundary & Diagonal Elements!
// function sumOfBoundaryAndDiagonal(matrix){
  
//     let n = matrix.length;
//     // console.log(n)
//     let result = 0;
//     for(let j=0; j<=(n-1); j++)
//     {
//       result+=matrix[0][j];
//     }
//     // console.log(result);
//     for(let i=1; i<=(n-1); i++)
//     {
//       result+=matrix[i][n-1];
//     }
//     // console.log(result);
//     for(let j=(n-2); j>=0; j--)
//     {
//       result+=matrix[n-1][j];
//     }
//     // console.log(result);
//     for(let i=(n-2); i>=1; i--)
//     {
//       result+=matrix[i][0];
//     }
//     // console.log(result);
//     for(let i=1; i<=(n-2); i++)
//     {
//       result+=matrix[i][i];
//     }
//     let i=1;
//     let j=(n-2);
//     while(i<=(n-2) && j>=1)
//     {
//       if(i!=j)
//       {
//         result+=matrix[i][j];
//       }
//       i++;
//       j--;
//     }
//     console.log(result);
//       //write code here
  
//   }





//N-Traersal!
// function nTraversal(matrix) 
// {
  
//     let result = '';
//     let n = matrix.length;
//     for(let i=(n-1); i>=0; i--)
//     {
//       result+=matrix[i][0]+' ';
//     }
//     for(let i=1; i<=(n-1); i++)
//     {
//       result+=matrix[i][i]+' ';
//     }
//     for(let i=(n-2); i>=0; i--)
//     {
//       result+=matrix[i][n-1]+' ';
//     }
    
//     console.log(result);
// }





//Z-Traversal!
// function zTraversal(N,arr)
// {
  
//     let result = '';
//     for(let j=0; j<=(N-1); j++)
//     {
//       result+=arr[0][j]+' ';
//     }
    
//     let i=1;
//     let j=(N-2);
//     while(i<=(N-1) && j>=0)
//     {
//       result+=arr[i][j]+' ';
//       i++;
//       j--;
//     }
    
//     for(let j=1; j<=(N-1); j++)
//     {
//       result+=arr[N-1][j]+' ';
//     }
    
//     console.log(result);
//       //write code here
// }
  
  
  






//merge!
// function mergeArrays(n,A,m,B){
  
//     let i=0;
//     let j=0;
    
    
//     let N = n+m;
//       // console.log(N);
  
//     let res = [];
    
//     for(let k=0; k<N; k++)
//     {
//       // console.log('for');
//       if(A[i]<B[j])
//       {
//         res.push(A[i]);
//         // k++;
//         i++;
//       }
//       else
//       {
//         res.push(B[j]);
//         // k++;
//         j++;
//       }
//     }
//     console.log(res.join(' '));
//     // write the code below and print the output in the console
   
//    }
  

// let i=0;
// console.log(i++);
// console.log(i++);
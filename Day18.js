//Selection Sort!
// function solve(N,arr){
//     for(let i=0; i<N-1; i++)
//     {
//       let minIndex = i;
//       for(let j=i+1; j<N; j++)
//       {
//         if(arr[minIndex]>arr[j])
//         {
//           minIndex=j;
//         }
//       }
//       if(arr[i]!=arr[minIndex])
//       {
//         let temp = arr[i];
//         arr[i]=arr[minIndex];
//         arr[minIndex]=temp;
//       }
//     }
//     console.log(arr.join(' '))
//       //write code here
//   }






//Bubble sort!
//   function solve(N,arr){

//     for(let i=0; i<N-1; i++)
//     {
//       for(let j=0; j<(N-i-1); j++)
//       {
//         if(arr[j]>arr[j+1])
//         {
//           let temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;
//         }
//       }
//       // console.log(arr[i])
//     }
//     console.log(arr.join(' '));
//       //write code here
//   }






//Stack Problem!
// let N = 9;
// let S = [];

// while (N > 0) {
//   if ((N - 1)%3 > 0) {
//     S.push(N);
//   } else {
//     console.log(S.pop());

//   }
//   N = N - 1;
// }







//Stack Problem!
// let N = 9
// let S1 = [];
// let S2 = [];
// for(let i=1; i<=100; i++)
// {

//      S1.push( i )

//      if( i%3 == 0 || i%5 == 0)
//     {

//         S2.push( S1.pop() );

//     }

// }
// console.log(S1.length);
// console.log(S2.length);






//Stack Problem!
// let S1 = [1,2,3,4,5,6,7,8,9,10];
// let S2 = [];
// // console.log(S1[S1.length-1]);
// // console.log(S1.pop());
// while( !S1.length==0)
// {
//     X = S1.pop();
//     while(!S2.length==0 && X < S2[S2.length-1] )
//     {
//         S1.push(S2.pop());
//     }
//     S2.push( X )
// }
// while( !S2.length==0)
// {
//     console.log( S2.pop() );
// }






// let A = [2, 8, 4, 6, 5, 10];

// let S = [];
// let N = 6;

// for (let i = N - 1; i >= 0; i--) {
//   while (S.length > 0 && S[S.length - 1] < A[i]) {
//     S.pop();
//   }
//   if (S.length > 0) {
//     console.log(S[S.length - 1]);
//   } else {
//     console.log(-1);
//   }
//   S.push(A[i]);
// }




//Remove to Sort!
// function removeToSort(arr,N)
// {
//   let S = [];
//   S.push(arr[0]);
//   for(let i=1; i<N; i++)
//   {
//     if(arr[i]>=S[S.length-1])
//     {
//       S.push(arr[i]);
//     }
//   }
//   console.log(S.join(' '));
// }

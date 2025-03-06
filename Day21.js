//Queues!
//Q1-
let Q = [];
let N = 100
let K = 5

for( let i = 0; i <= N; i = i + K )
{

     Q.push( i %3 );
}
console.log(Q.length);


// Queue Q 
// N = 100 
// K = 5

// for( i = 0; i <= N; i = i + K ){

//      Q.enqueue( i %3 )
// }

//Q2-
// let Q = [];
// let N = 10;

// Q.push(1);

// while (Q.length > 0) 
// {
//   console.log(Q.shift());

//   let F = Q.shift();
//   Q.dequeue();

//   if (F * 2 <= N) 
//   {
//     Q.push(F * 2);
//   }

//   if (F * 2 + 1 <= N) 
//   {
//     Q.push(F * 2 + 1);
//   }
// }

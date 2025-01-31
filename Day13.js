//print factors!
// function printfactors(n)
// {
//     for(let i=1; i<=n; i++)
//     {
//         if(n%i==0)
//         {
//             console.log(i);
//         }
//     }

// }

// printfactors(12);

//factors count!
// function factors_counts(n)
// {
//     let count =0;
//     for(let i=1; i<=n; i++)
//     {
//         if(n%i==0)
//         {
//             count++;
//         }
//     }
//     console.log(count);

// }

// factors_counts(12);

//check Prime!
// function isPrime(n)
// {
//     let count = 0;
//     for(let i=1; i<=n; i++)
//     {
//         if(n%i==0)
//         {
//             count++;
//         }
//     }

//     if(count===2)
//     {
//         console.log('Prime');
//     }
//     else
//     {
//         console.log('Not a Prime');
//     }
// }

// isPrime(5);

//pattern!
/*
 *
 *
 *
 *
 *
 *
 */
// let n=6;
// for(let i=0; i<n; i++)
// {
//     console.log('*');
// }

//pattern!
/*
 ******
 */
// function fun(n)
// {
//     let row = '';
//     for(let i=0; i<n; i++)
//     {
//         row= row+'*';
//     }
//     console.log(row);

// }
// fun(6);

//pattern!
/*
 * * * * * *
 */
// function fun(n)
// {
//     let row = '';
//     for(let i=0; i<n; i++)
//     {
//         row= row+'*'+' ';
//     }
//     console.log(row);

// }
// fun(6);

//pattern!
/*
    1
    1 2
    1 2 3
    1 2 3 4 
    1 2 3 4 5
    1 2 3 4
    1 2 3 
    1 2
    1
*/
// function fun(n)
// {

//     for(let i=1; i<=n; i++)
//     {
//         let row = '';
//         for(let j=1; j<=i; j++)
//         {
//             row = row+j+' ';
//         }
//         console.log(row);

//     }

// }
// fun(5);

//pattern!
/*
    *
    *
    *
    *
    * * * * *
 */
// let n = 5;
// function fun(n) {
//   let row = "";
//   for (let i = 1; i < n; i++) {
//     row = row + "*" + " ";
//   }
//   console.log(row);
// }

// for (let i = 1; i < n; i++) {
//   console.log("*");
// }
// fun(6);


//Z Pattern!

let N = 10
let row1 = '';
  for(let i=1; i<=N; i++)
  {
    row1 = row1+'*';
  }
  console.log(row1);
  
  
  
  for(let i=1; i<=(N-2); i++)
  {
    let row2 = '';
    for(let j=1; j<=((N-i)-1); j++)
    {
      row2 = row2+' ';
    }
    row2 = row2+'*';
    console.log(row2);
  }
  
  
  console.log(row1);
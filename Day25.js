//Recursion!





//Factorial By Recursion!
function factorial(n) 
{
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

let n=5;
let res = factorial(n);
console.log(res);

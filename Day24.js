//BitWise Operator!
// console.log(28<<1);





//All Twice Except one!
function allTwiceExceptOne(n, arr){
    let a=arr[0];
    for(let i=1; i<n*2; i++)
    {
      a = a^arr[i];
      // console.log(a);
    }
    console.log(a);
    // write your code here
  }
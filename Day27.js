//Binary Search Iterative!
function binarySearchIterative(k,n,arr)
{
  let low = 0;
  let high = n-1;
  while(low<=high)
  {
    let mid = low+Math.floor((high-low)/2);
    if(k==arr[mid])
    {
      return 1;
    }
    else if(k<arr[mid])
    {
      high = mid-1;
    }
    else
    {
      low = mid+1;
    }
  }
  return -1;
}
function runProgram(input)
{
  input = input.split('\n');
  let line1 = input[0].split(' ').map(Number);
  let n = line1[0];
  let k = line1[1];
  let arr = input[1].split(' ').map(Number);
  let res = binarySearchIterative(k,n,arr);
  console.log(res);
  // Write code here
}
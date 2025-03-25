//Binary Search!





//Binary Search through recursion!
function binarySearch(k,low,high,arr)
{
  let mid = Math.floor((low+high)/2);
  if(low>high)
  {
    return -1;
  }
  else if(arr[mid]==k)
  {
    return 1;
  }
  else if(arr[mid]<k)
  {
    return binarySearch(k,low,mid-1,arr);
  }
  else
  {
    return binarySearch(k,mid+1,high,arr);
  }
}
function runProgram(input) 
{
  input = input.split('\n');
  let line1 = input[0].split(' ').map(Number);
  let n = line1[0];
  let k = line1[1];
  let arr = input[1].split(' ').map(Number);
  // console.log(k,n,arr);
  let res = binarySearch(k,0,n-1,arr);
  console.log(res);
  // Write code here
}
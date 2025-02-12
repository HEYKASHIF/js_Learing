//Traverse a 2D-Array!
let matrix = [
  [1, 8, 9],
  [2, 7, 10],
  [3, 6, 11],
  [4, 5, 12],
];
let N = matrix.length;
let M = matrix[0].length;
function traverse2dArray(N, M, matrix) {
  let empty = "";
  for (let i = 0; i < M; i++) {
    for (let j = N - 1; j >= 0; j--) {
      empty += matrix[j][i] + " ";
    }
  }
  console.log(empty);
  //write code here
}



//Go In Zig-Zag!
function goInZigZag(N, M, matrix){
  
    let empty = '';
    for(let j=0; j<N; j++)
    {
      if(j%2==0)
      {
        for(let i=M-1; i>=0; i--)
        {
          empty+=matrix[j][i]+' ';
        }
      }
      else
      {
        for(let i=0; i<M; i++)
        {
          empty+=matrix[j][i]+' ';
        }
      }
    
    }
    console.log(empty);
      //write code here
    
  }

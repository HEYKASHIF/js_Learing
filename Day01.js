
let num = 5;
for(let i=1; i<=num; i++)
{
  if(i%7==0)
  {
    break;
  }
  else
  {
    
    let row = '';
    for(let j=1; j<=i; j++)
    {
      if(j%3==0)
      {
        continue;
      }
      row = row+j+' ';
    }
    console.log(row);
    
  }
  
}
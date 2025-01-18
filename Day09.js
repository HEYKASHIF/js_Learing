function numberPattern(N){
  
    let New = N+(N-1);
    let Lnew = N*2;
    let count = 1;
    
    for(let i=1; i<=New; i++)
    {
      let row = '';
      if(count<=N)
      {
        for(let j=1; j<=i; j++)
        {
          row = row+j;
          
        }
        
        console.log(row);
        count++;
      }
      else
      {
        for(let k=1; k<=(Lnew-i); k++)
        {
          row = row+k;
        }
        console.log(row);
      }
    }
  }
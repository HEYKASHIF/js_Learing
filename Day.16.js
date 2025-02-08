//frequency!

function freq(arr)
{
    let obj = {};
    for(let i=0; i<arr.length; i++)
    {
        if(obj[arr[i]])
        {

            obj[arr[i]] = obj[arr[i]]+1;
        }
        else
        {
            obj[arr[i]] = 1;

        }
    }
    return obj;
}

let obj = freq([1,1,1,1,1,2,2,2,2])


let frequency = 0;
let element =0;
for(let key in obj)
{
    if(obj[key]>frequency)
    {
        frequency = obj[key];
        element = key;
    }
    
}
console.log(frequency, element);
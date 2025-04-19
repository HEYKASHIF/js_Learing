const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];


const profile = { 
    name: "Charlie", 
    age: 29, 
    address: { city: "San Francisco", zipcode: "94101" } 
};
const updates = { 
    age: 30, 
    address: { zipcode: "94109", country: "USA" } 
};

let proUpdate = {...profile, ...updates};
console.log(proUpdate);

 


//OPTIONAL CHAINING!
// Optional chaining (?.) allows you to safely access nested object properties.
// If the reference before ?. is null or undefined, 
// it stops and returns undefined instead of throwing an error.

// let obj = {
//     userName: "kashifmohd",
//     id:39,
//     email:"kashifmohd229@gmail.com"
// }
// console.log(obj?.lastName?.[0]);









//TERNARY OPERATOR!
// let marks = 60;

// if(marks>=90)
// {
//     console.log('A');
// }
// else if(marks>=70)
// {
//     console.log('B');
// }
// else
// {
//     console.log('C');
// }

// console.log(marks>=90?"A":marks>=70?"B":"C");








//ARRAY SPREADING!
// let arr = [1,2,3,4,5];
// let arr2 = [11,22,33,44,55];

// let finArr = [...arr,...arr2];
// console.log(finArr);






//OBJECT SPREADING!
// let obj = { a: 1, b: 2 };
// let obj2 = { c: 11, d: 22 };

// let finObj = { ...obj, ...obj2, e: 100 };
// console.log(finObj);







//DESTRUCTURED SWAPPING!
// let a = 30;
// let b = 900;
// [a,b] = [b,a];
// console.log(a,b);







//MULTILEVEL DESTRUCTURING!
// let user = {

//     userName:"Bheem",
//     userDesignation:"Manager",
//     skills:{
//         softSkills:["Communication", "Leaderships"],
//         techSkills:["jS", "react","nodeJS"]
//     }
// }

// let {userName,userDesignation, skills:{softSkills ,techSkills}} = user;
// console.log(userDesignation);
// console.log(softSkills);
// console.log(techSkills);
// console.log(userName);

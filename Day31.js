///ABOUT CLOSURES!
// function outer() {
//     let message = "Hello";
//     return function inner() {
//       return message + " World";
//     };
//   }
//   const closure = outer();
//   console.log(closure());
  











// function counter() {
//     let count = 0;
//     return function() {
//       console.log(count++);
//     }
//   }
//   const c = counter();
//   c();
//   c();
//   console.log(count);












// let counter = function () {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// counter();
// counter();
// counter();










// let myVar = "Not hoisted";
// console.log(myVar);











// function createLogger() {
//   var logs = [];
//   return function (log) {
//     logs.push(log);
//     console.log(logs);
//   }
// }
// const logData = createLogger();
// logData("Test");
// logData("Debug");
// console.log(logs);









// function multiply(x) {
//   return function(y) {
//     return x * y;
//   }
// }
// let multiplyBy2 = multiply(2);
// console.log(multiplyBy2(5));










// function outerFunction()
// {
//   let message = 'hello sweetie!';
//   return function innerFunction()
//   {
//     console.log(message);
//   }
// }

// let variableFunction = outerFunction();

// variableFunction();   





  
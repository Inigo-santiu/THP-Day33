// Operations and loops


// var userNumber;
// var result = 1;
// userNumber = prompt("Please give a number: ");
// function factorial(userNumber) {
//   var i = 1;
//   if (userNumber === 0) {
//     return 0;
//   }
//   else if (i > userNumber) {
//       result *= i;
//       i += 1;
//       return result
//     }
// }
// console.log(`You typed ${userNumber} and you got ${factorial(userNumber)}.`)

// var userNumber;
// userNumber = prompt("Please give a number: ");
// var n = userNumber;
// var f = [];
// function factorial (n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//   console.log(`${f[n] = factorial(n-1) * n}`)
// } 

// var f = [];
// function factorial (n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//   return f[n] = factorial(n-1) * n;
// } 

let userNumber = prompt ("Give a number: ");

function factorial(userNumber){
  var i, userNumber, f = 1;
  
  for(i = 1; i <= userNumber; i++)
  {
    f = f * i
  }
  return f;
}

console.log(`You typed ${userNumber} and your factorial is ${factorial(userNumber)}. I hope you're happy.`)
// PIRMA UŽDUOTIS

//function sum
//function mult
//function minus

//function b

// var a = b(7, 10, sum); //17
// var c = b(7, 10, mult); //70
// var d = b(7, 10, minus); //3

// function sum(a, b) {
//   return a + b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function b(a, b, callback) {
//   return callback(a, b);
// }

// console.log(a);
// console.log(c);
// console.log(d);

// ANTRA UŽDUOTIS

// var a = b(7, 10, function (a, b) {
//   return a + b;
// });
// //17

// var c = b(7, 10, function (a, b) {
//   return a * b;
// });
// //70

// var d = b(7, 10, function (a, b) {
//   if (b > a) {
//     return b - a;
//   }
//   return a - b;
// });
// //3

// function b(a, b, callback) {
//   return callback(a, b);
// }

// console.log(a);
// console.log(c);
// console.log(d);

// TREČIA UŽDUOTIS

// var countFactory = function () {
//   var counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// };

// var count = countFactory();
// var anotherCount = countFactory();

// var count1 = count();
// console.log(count1);

// var count2 = anotherCount();
// console.log(count2);

// var count3 = count();
// console.log(count3);

// KETVIRTA UŽDUOTIS

// var countFactory = function (x) {
//   var counter = 0;
//   return function () {
//     return (counter += x);
//   };
// };

// var count = countFactory(10);
// var anotherCount = countFactory(2);

// var count1 = count();
// console.log(count1);

// var count2 = anotherCount();
// console.log(count2);

// var count3 = count();
// console.log(count3);

// PENKTA UŽDUOTIS

var accountFactory = function () {
  var balance = 0;
  return function (x) {
    return (balance += x);
  };
};

var addToAccount = accountFactory();
console.log(accountFactory);
console.log(addToAccount);

var count1 = addToAccount(11);
console.log(count1);

var count3 = addToAccount(4);
console.log(count3); // 15

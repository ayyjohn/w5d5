let sum = require ("./arguments.js");

function curriedSum(numArgs) {
  let numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return numbers.reduce( (a, b) =>  a + b, 0);
    }
    else {
      return _curriedSum;
    }
  };
}

Function.prototype.myCurry = function(numArgs){
  let args = [];

  return function _myCurry(arg){
    args.push(arg);

    if (args.length === numArgs){
      return this.apply(this, args);
    } else {
      return this._myCurry;
    }
  };
};

const result = curriedSum(4);
console.log(result(5)(30)(20)(1));

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// console.log(sumThree.myCurry(3)(4)(20)(6));


//  ALSO WORKS //
//
//
// function curriedSum(numArgs) {
//   let numbers = [];
//
//   function _curriedSum(num) {
//     numbers.push(num);
//
//     if (numbers.length === numArgs) {
//       return numbers.reduce( (a, b) =>  a + b, 0);
//     }
//     else {
//       return _curriedSum;
//     }
//   }
//  return _curriedSum;
// }

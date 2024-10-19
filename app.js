import multiply, { add, subtract } from "./mathModule.js";
import { toUpperCase, toLowerCase } from "./stringModule.js";
import { findMax, reverseArray } from "./arrayModule.js";
import { addAndLogUpper } from './mathModule.js';

let numbers = [54, 320, 66, 47, 70];

console.log("Adding a and b together, produces a sum of " + add(4, 17));
console.log("Subtracting a and b, produces a difference of " + subtract(50, 12));
console.log("The Uppercase string manipulation function yields - " + toUpperCase('toronto'));
console.log("The Lowercase string manipulation function yields - " + toLowerCase('MARATHON'));
console.log("Multiplying a and b together, produces a product of " + multiply (4,17));
console.log("The function 'findMax' finds the maximum value within the array " + numbers + " , which is " + findMax(numbers)); 
console.log("The function 'reverseArray' flips an array in reverse thus producing " + reverseArray(numbers));

addAndLogUpper(76, 320);


const max = findMax(numbers);
const multiplyResults = multiply(max, 4);
const upperCaseResults = toUpperCase(multiplyResults.toString());

console.log("The final result after combining the functionalities in this file yields the value " + upperCaseResults);





 
  